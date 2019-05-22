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
    }

    async componentDidMount() {
        const userData = await axios.get('http://localhost:3001/user?username=' + this.props.username);
        const tweetsId = userData.data.tweets;

        tweetsId.forEach(async element => {
            const tempTweet = await axios.get('http://localhost:3001/tweet?id=' + element);
            const tweetContent = await axios.get('http://localhost:3001/content?id=' + tempTweet.data.content);

            let tweet = tempTweet.data;
            tweet.author = userData.data;
            tweet.content = tweetContent.data;

            if (!tweet.isResposne) {
                this.setState({
                    tweets: [...this.state.tweets, tweet]

                });
            }
        });
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

    render(props) {
        const tweets = [].concat(this.state.tweets)
            .sort((a, b) => a.date - b.date).reverse()
            .map(item => {
                return (
                    <PostCard tweet={item} key={item.id} handleComment={this.handleComment} />
                );

            });

        return (
            <div>
                <Navbar user={this.props.user} />
                <div className="feed-page">
                    <Row className="justify-content-md-center no-margin">
                        <Col md="auto">
                            <div className="content-box">
                                {!this.props.isProfileFeed && <NewPostTimeLine user={this.props.user} />}
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