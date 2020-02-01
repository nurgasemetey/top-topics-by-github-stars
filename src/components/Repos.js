import React, { Fragment } from "react";
import Repo from "./Repo";

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

export default Repos;
