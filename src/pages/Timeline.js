import React, { Component } from "react";
import './Timeline.css';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios'
import Navbar from './../components/navbar/Navbar';
import { Api } from './../service/Api.js';
import PostCard from './../components/post/PostCard';
import NewPostTimeLine from './../components/new-post/NewPostTimeLine';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = { tweets: [] };
        this.handleComment = this.handleComment.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
    }

    async componentDidMount() {
        let username;
        this.props.other ? username = this.props.other.username : username = this.props.username;
        const userData = await axios.get('http://localhost:3001/user?username=' + username);
        const tweetsId = userData.data.tweets;

        tweetsId.forEach(async element => {
            const tempTweet = await axios.get('http://localhost:3001/tweet?id=' + element);
            const tweetContent = await axios.get('http://localhost:3001/content?id=' + tempTweet.data.content);
            const tempAuthor = await axios.get('http://localhost:3001/userId?id=' + tempTweet.data.author);

            let tweet = tempTweet.data;
            tweet.author = tempAuthor.data;
            tweet.content = tweetContent.data;

            if (!tweet.isResponse) {
                this.setState({
                    tweets: [...this.state.tweets, tweet]

                });
            }
        });


        /* Only will request the user following tweets if the user isn't on profile page.   
        */
        if (!this.props.isProfileFeed) {
            const following = userData.data.following;

            following.forEach(async element => {
                let followingData = await axios.get('http://localhost:3001/userId?id=' + element);
                let followingTweets = followingData.data.tweets;

                followingTweets.forEach(async ftweet => {
                    const tempTweet = await axios.get('http://localhost:3001/tweet?id=' + ftweet);
                    const tweetContent = await axios.get('http://localhost:3001/content?id=' + tempTweet.data.content);
                    const tempAuthor = await axios.get('http://localhost:3001/userId?id=' + tempTweet.data.author);

                    let tweet = tempTweet.data;
                    tweet.author = tempAuthor.data;
                    tweet.content = tweetContent.data;


                    if (!tweet.isResponse) {
                        this.setState({
                            tweets: [...this.state.tweets, tweet]

                        });
                    }
                })

            });
        }
    }

    async handleComment(comment, postId) {
        const createdContent = await Api.post('content', { text: comment });
        const post = {
            author: this.props.user,
            content: createdContent.data.id,
            isResponse: true
        };

        const createdPost = await Api.post('tweet', post);
        const existingPost = await Api.get(`tweet?id=${postId}`);

        existingPost.data.comments.push(createdPost.data.id);

        await Api.patch(`tweet?id=${postId}`, existingPost.data);

        this.setState(prevState => {
            const updatedTweets = prevState.tweets.map(tweet => {
                if (tweet.id === existingPost.data.id) {
                    tweet.comments = existingPost.data.comments;
                }

                return tweet;
            })

            return {
                tweets: updatedTweets
            }
        });
    }

    async handleLike(postId) {
        const existingPost = await Api.get(`tweet?id=${postId}`);
        let updatedpost = {};

        if (existingPost.data.likes.includes(this.props.user._id)) {
            updatedpost = await Api.patch(`tweet/delete?id=${postId}`, existingPost.data);
        } else {
            existingPost.data.likes.push(this.props.user._id);
            updatedpost = await Api.patch(`tweet?id=${postId}`, existingPost.data);
        }

        this.setState(prevState => {
            const updatedTweets = prevState.tweets.map(tweet => {
                if (tweet.id === updatedpost.data.id) {
                    tweet.likes = updatedpost.data.likes;
                }

                return tweet;
            })

            return {
                tweets: updatedTweets
            }
        });
    }

    async handleRetweet(postId) {
        const user = await axios.get('http://localhost:3001/user?username=' + this.props.username);
        const userData = user.data;
        const existingPost = await Api.get(`tweet?id=${postId}`);

        existingPost.data.retweet = true;

        userData.tweets.push(existingPost.data.id)

        await Api.patch(`user?username=${this.props.username}`, userData);
    }

    render(props) {
        const tweets = [].concat(this.state.tweets)
            .filter((element, id) => id === this.state.tweets.findIndex(ele => element.id === ele.id))
            .sort((a, b) => a.date - b.date).reverse()
            .map(item => {
                return (
                    <PostCard tweet={item} key={item.id} handleComment={this.handleComment} handleLike={this.handleLike} handleRetweet={this.handleRetweet} />
                );
            });

        return (
            <div>
                <Navbar user={this.props.user} />
                <div className="feed-page">
                    <Row className="justify-content-md-center no-margin">
                        <Col md="auto">
                            <div className="content-box">
                                {!this.props.isProfileFeed && !this.props.other && <NewPostTimeLine user={this.props.user} />}
                                {!this.props.isProfileFeed && this.props.other && <NewPostTimeLine user={this.props.other} />}
                                {tweets}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Timeline;