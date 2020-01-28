import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user: null
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  handleUsername(value) {
    this.setState(
      {
        username: value
      },
      () => this.fetchUserData()
    );
  }

  async fetchUserData() {
    let res = await fetch(
      `https://api.github.com/users/${this.state.username}`
    );
    let user = await res.json();

    user.repos = await this.fetchRepos(`${user.repos_url}?sort=pushed`);
    user.created_at = new Date(user.created_at);

    this.setState({ user });
  }

  async fetchRepos(repos_url) {
    let res = await fetch(repos_url);
    let repos = await res.json();

    if (repos.length > 6) repos = repos.slice(0, 6);

    return repos;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search handleUsername={this.handleUsername} />
        {this.state.user && <UserInfo user={this.state.user} />}
      </div>
    );
  }
}
