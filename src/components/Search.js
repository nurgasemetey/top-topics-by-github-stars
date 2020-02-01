import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.input.current.value.toLowerCase();
    if (!username.length) return;
    this.input.current.value = "";
    this.input.current.blur();
    this.props.handleUsername(username);
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
                ref={this.input}
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

Search.propTypes = {
  handleUsername: PropTypes.func.isRequired
};

export default Search;
