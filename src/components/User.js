import React, { Fragment } from "react";

function User({ user }) {
  return (
    <Fragment>
      <div className="level" style={{ margin: "2em 0" }}>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Followers</p>
            <p className="title">{user.followers}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Following</p>
            <p className="title">{user.following}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Public repositories</p>
            <p className="title">{user.public_repos}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Public gists</p>
            <p className="title">{user.public_gists}</p>
          </div>
        </div>
      </div>

      <div className="card is-shadowless" style={{ margin: "2em" }}>
        <div className="card-image">
          <figure className="image is-128x128">
            <img src={user.avatar_url} alt="GitHub profile" />
          </figure>
        </div>

        <div className="card-content">
          <p className="title is-4">{user.name}</p>
        </div>

        {user.blog && (
          <p>
            <span className="icon">
              <i className="fas fa-link"></i>
            </span>{" "}
            {user.blog}
          </p>
        )}

        {user.location && (
          <p>
            <span className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>{" "}
            {user.location}
          </p>
        )}
      </div>
    </Fragment>
  );
}

export default User;
