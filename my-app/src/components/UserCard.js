import React, { Component } from "react";
import Followers from "./Followers";
import Axios from 'axios';

class UserCard extends Component {
  constructor() {
    super();
    this.state = {
        followers: []
    };
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/alvillaraza/followers')
      .then(res => {
        console.log('followers', res);
        this.setState({
          followers: res.data
        })
      })
    .catch(err => console.log('error'));
  }

  render() {
    return (
      <div>
        <h2>{this.props.myInfo.name}</h2>
        <img
          src={this.props.myInfo.avatar_url}
          alt={`Profile of ${this.props.myInfo.name}`}
        />
        <p>Location: {this.props.myInfo.location}</p>
        <p>Bio: {this.props.myInfo.bio}</p>
    
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default UserCard;
