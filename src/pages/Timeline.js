import React, { Component } from "react";
import './Timeline.css';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios'
import Navbar from './../components/navbar/Navbar';
import PostCard from './../components/post/PostCard';
import NewPostTimeLine from './../components/new-post/NewPostTimeLine';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = { tweets: [] };
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

            this.setState({
                tweets: [...this.state.tweets, tweet]

            });
        });
    }

    render(props) {
        const tweets = [].concat(this.state.tweets)
            .sort((a, b) => a.date - b.date).reverse()
            .map(item => {
                return (
                    <PostCard tweet={item} key={item.id} />
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