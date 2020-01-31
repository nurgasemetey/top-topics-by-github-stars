import React from "react";

const Repo = ({ repo }) => (
  <div className="tile is-4 is-parent">
    <div className="tile is-child box">
      <p className="title is-5">{repo.name}</p>

      <p>
        <span className="icon">
          <i className="fas fa-code-branch"></i>
        </span>{" "}
        {repo.forks}
      </p>
      <p>
        <span className="icon">
          <i className="fas fa-star"></i>
        </span>{" "}
        {repo.stargazers_count}
      </p>
      <span className="tag is-info is-light is-rounded">{repo.language}</span>
    </div>
  </div>
);

export default Repo;
