import React, { Fragment } from "react";
import Repo from "./Repo";
import PropTypes from "prop-types";

const Repos = props => (
  <Fragment>
    <p className="title is-4 has-text-centered">Repositories</p>
    <div className="tile is-ancestor wrap">
      {props.repos.map(repo => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  </Fragment>
);

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
