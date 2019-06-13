import React, {Component} from "react";
import axios from "axios";
import './SearchPage.css';
import Navbar from '../components/navbar/Navbar';
import ProfileCard from '../components/profile-card/ProfileCard';

class SearchPage extends Component {
    constructor(props) {
        super(props);   
        this.user = this.props.location.state.user;
        
        this.state = {
            users: []
        }
        console.log(this.user)
    }

    componentDidMount() {
        axios.get('http://localhost:3001/users?username=' + this.props.location.state.search)
            .then(res => this.setState({users: res.data}))
    }

    componentDidUpdate(prevProps) {
        if(this.props.location.state.search !== prevProps.location.state.search) {
            this.setState({users: []})
            axios.get('http://localhost:3001/users?username=' + this.props.location.state.search)
                .then(res => this.setState({users: res.data}))

        }
    }

    render() {
        return(
            <div>
              <Navbar user={this.user}/>
              {this.state.users
                .map(item => <ProfileCard user={this.user} other={item} key={item._id}/>)}
            </div>
        );
    }
}

export default SearchPage;