import React, { Fragment } from "react";

export default function User(props) {
  const {
    followers,
    following,
    public_repos,
    public_gists,
    avatar_url,
    name,
    blog,
    location
  } = props.user;

  return (
    <Fragment>
      <div className="level" style={{ margin: "2em 0" }}>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Followers</p>
            <p className="title">{followers}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Following</p>
            <p className="title">{following}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Public repositories</p>
            <p className="title">{public_repos}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Public gists</p>
            <p className="title">{public_gists}</p>
          </div>
        </div>
      </div>

      <div className="card is-shadowless" style={{ margin: "2em" }}>
        <div className="card-image">
          <figure className="image is-128x128">
            <img src={avatar_url} alt="GitHub profile" />
          </figure>
        </div>

        <div className="card-content">
          <p className="title is-4">{name}</p>
        </div>

        {blog && (
          <p>
            <span className="icon">
              <i className="fas fa-link"></i>
            </span>{" "}
            {blog}
          </p>
        )}

        {location && (
          <p>
            <span className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>{" "}
            {location}
          </p>
        )}
      </div>
    </Fragment>
  );
}
