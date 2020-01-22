import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.getUser = this.getUser.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  async getUser(username) {
    let res = await fetch(`https://api.github.com/users/${username}`);
    let info = await res.json();

    info.repos_info = await this.getRepos(info.repos_url);

    if (info.public_repos > 5) {
      info.repos_info = info.repos_info.slice(0, 5);
    }
    info.created_at = new Date(info.created_at);

    this.setState({
      user: info
    });
  }

  async getRepos(url) {
    let res = await fetch(url);
    let repos = await res.json();

    return repos;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search onSubmit={this.getUser} />
        {this.state.user !== null && <UserInfo user={this.state.user} />}
      </div>
    );
  }
}

export default App;
