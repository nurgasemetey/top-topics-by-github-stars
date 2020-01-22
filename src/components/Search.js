import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    if (e) e.preventDefault();
    let username = document.getElementsByClassName("input")[0].value;

    this.props.onSubmit(username);
    document.getElementsByClassName("input")[0].value = "";
  }

  render() {
    return (
      <section className="section">
        <form
          onSubmit={e => {
            this.onSubmit(e);
          }}
        >
          <div className="field has-addons has-addons-centered">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Username"
              ></input>
            </div>
            <div className="control">
              <a
                href="#"
                onClick={e => this.onSubmit(e)}
                className="button is-primary"
              >
                Analyze
              </a>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Search;
