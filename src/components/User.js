import React, { Fragment } from "react";
import PropTypes from "prop-types";

const User = props => {
  const {
    bio,
    login,
    company,
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

      <div className="box is-shadowless">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img
                className="is-rounded"
                src={avatar_url}
                alt="GitHub profile"
              />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-4">{name || login}</p>

            {bio && <p className="subtitle">{bio}</p>}

            {company && (
              <p>
                <span className="icon">
                  <i className="fas fa-briefcase" />
                </span>{" "}
                {company}
              </p>
            )}

            {location && (
              <p>
                <span className="icon">
                  <i className="fas fa-map-marker-alt" />
                </span>{" "}
                {location}
              </p>
            )}

            {blog && (
              <p>
                <span className="icon">
                  <i className="fas fa-link" />
                </span>{" "}
                {blog}
              </p>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
