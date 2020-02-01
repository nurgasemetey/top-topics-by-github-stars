import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import Modal from "./components/Modal";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user: null,
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  toggleModal() {
    this.setState(state => ({
      showModal: !state.showModal
    }));
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

    if (user.message === "Not Found") {
      this.toggleModal();
      return;
    }

    user.repos = await this.fetchRepos(
      `${user.repos_url}?per_page=6&sort=pushed`
    );
    user.followers_info = await this.fetchFollowers(
      `${user.followers_url}?per_page=8`
    );

    user.created_at = new Date(user.created_at);

    this.setState({ user });
  }

  async fetchRepos(repos_url) {
    let res = await fetch(repos_url);
    let repos = await res.json();

    return repos;
  }

  async fetchFollowers(followers_url) {
    let res = await fetch(followers_url);
    let followers = await res.json();

    followers.reverse();

    return followers;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search handleUsername={this.handleUsername} />
        {this.state.user && <UserInfo user={this.state.user} />}
        <Modal show={this.state.showModal} toggleModal={this.toggleModal} />
      </div>
    );
  }
}
