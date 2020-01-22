import React from "react";

function Repo(props) {
  return (
    <div className="tile is-4 box is-child">
      <p className="title is-5">{props.repo.name}</p>

      <p>
        <span className="icon">
          <i className="fas fa-code-branch"></i>
        </span>{" "}
        {props.repo.forks}
      </p>
      <p>
        <span className="icon">
          <i className="fas fa-star"></i>
        </span>{" "}
        {props.repo.stargazers_count}
      </p>
      <span class="tag is-info is-light is-rounded">{props.repo.language}</span>
    </div>
  );
}

export default Repo;
