import React from "react";
import PropTypes from "prop-types";

const Repo = ({ repo: { name, forks, stargazers_count, language } }) => (
  <div className="tile is-4 is-parent">
    <div className="tile is-child box">
      <p className="title is-5">{name}</p>

      <p>
        <span className="icon">
          <i className="fas fa-code-branch" />
        </span>{" "}
        {forks}
      </p>

      <p>
        <span className="icon">
          <i className="fas fa-star" />
        </span>{" "}
        {stargazers_count}
      </p>

      {language && (
        <span className="tag is-info is-light is-rounded">{language}</span>
      )}
    </div>
  </div>
);

Repo.propTypes = {
  repo: PropTypes.object.isRequired
};

export default Repo;
