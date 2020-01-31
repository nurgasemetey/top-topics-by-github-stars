import React, { Fragment } from "react";
import Repo from "./Repo";

export default function Repos(props) {
  const divStyle = { flexWrap: "wrap" };

  return (
    <Fragment>
      <p className="title is-4 has-text-centered">Repositories</p>
      <div className="tile is-ancestor" style={divStyle}>
        {props.repos.map(repo => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </div>
    </Fragment>
  );
}
