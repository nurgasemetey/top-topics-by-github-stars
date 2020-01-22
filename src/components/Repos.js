import React, { Component, Fragment } from "react";
import Repo from "./Repo";

class Repos extends Component {
  render() {
    const divStyle = { flexWrap: "wrap" };

    return (
      <Fragment>
        <p className="title is-4 center">Repositories</p>
        <div className="tile is-ancestor">
          <div className="tile is-12 is-parent" style={divStyle}>
            {this.props.repos.map(repo => (
              <Repo repo={repo} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Repos;
