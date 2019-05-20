import React, {Component} from "react";
import axios from "axios";
import Navbar from '../components/navbar/Navbar';

class SearchPage extends Component {
    constructor(props) {
        super(props);   
        this.user = this.props.location.state.user;
        
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/users?username=' + this.props.location.state.search)
            .then(res => this.setState({users: res.data}))
    }

    render() {
        console.log(this.state.users);
        return(
            <div>
              <Navbar user={this.user}/>
            </div>
        );
    }
}

export default SearchPage;