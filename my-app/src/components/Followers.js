import React, { Component } from "react";

class Followers extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.followers.map((follower) => (
          <div>
            <h2>{follower.name}</h2>
            <img
              src={follower.avatar_url}
              alt={`Profile of ${follower.name}`}
            />
            <p>
              <a href={follower.html_url}>{follower.login}</a>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Followers;
