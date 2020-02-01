import React from "react";

const Follower = ({ follower }) => (
  <div className="tile is-3 is-parent">
    <div className="tile is-child box">
      <div className="media-content has-text-centered">
        <figure className="image is-96x96 is-inline-block">
          <img
            className="is-rounded"
            src={follower.avatar_url}
            alt="GitHub profile"
          />
        </figure>
        <div className="content">
          <p className="title is-5">
            <strong>{follower.login}</strong>
          </p>
        </div>
        <a
          href={follower.html_url}
          rel="noopener noreferrer"
          target="_blank"
          className="button is-link is-light"
        >
          View
        </a>
      </div>
    </div>
  </div>
);

export default Follower;
