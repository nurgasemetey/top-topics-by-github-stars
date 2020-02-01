import React, { Fragment } from "react";
import Follower from "./Follower";
import PropTypes from "prop-types";

const Followers = ({ followers }) => (
  <Fragment>
    <p className="title is-4 has-text-centered">Followers</p>

    <div className="tile is-12 is-ancestor wrap">
      {followers.map(follower => (
        <Follower key={follower.id} follower={follower} />
      ))}
    </div>
  </Fragment>
);

Followers.propTypes = {
  followers: PropTypes.array.isRequired
};

export default Followers;
