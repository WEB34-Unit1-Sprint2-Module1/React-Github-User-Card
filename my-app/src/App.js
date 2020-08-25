import React from 'react';

import './App.css';
import UserCard from './components/UserCard';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    // console.log("constructor is running");
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/alvillaraza')
      .then(res => {
        console.log('me', res);
        this.setState({
          users: res.data
        })
      })
    .catch(err => console.log('error'));
  }

  render() {
    return (
      <div>
        <UserCard myInfo={this.state.users}/>
      </div>
    )
  }
}

export default App;
