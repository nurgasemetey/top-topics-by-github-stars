import React from "react";

export default function Repo({ repo }) {
  return (
    <div className="tile is-4 box is-child">
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
  );
}
