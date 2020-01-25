import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username } = this.state;
    if (username === "") return;
    this.setState({
      username: ""
    });
    this.props.onSubmit(username);
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <section className="section">
        <form onSubmit={this.handleSubmit}>
          <div className="field has-addons has-addons-centered">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="control">
              <button className="button is-primary">Analyze</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
