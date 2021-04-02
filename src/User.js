import React, { Component } from "react";
import "./index.css";

class User extends Component {
  defaultUser = {
    name: "",
    location: "",
    avatar_url: "https://img.devrant.com/devrant/rant/r_1954098_g4565.jpg",
    html_url: "https://github.com",
  };

  state = {
    user: this.defaultUser,
  };

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  };

  onUserSubmit = () => {
    const userId = document.querySelector(".name-form-input").value;

    this.fetchUser(userId);
  };

  render() {
    const { avatar_url, name, location, html_url } = this.state.user;

    return (
      <>
        <div className="user">
          <a href={html_url || this.defaultUser.html_url} target="_blank" className="avatarUrl">
            <img src={avatar_url || this.defaultUser.avatar_url} alt="avatar" className="avatar" />
          </a>
          <div className="user-info">
            <a href={html_url} target="_blank" className="user-name">
              {name}
            </a>
            <span className="user-location">{location}</span>
          </div>
        </div>
        <form className="name-form">
          <input type="text" className="name-form-input" />
          <button type="submit" onClick={this.onUserSubmit} className="name-form-btn">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default User;
