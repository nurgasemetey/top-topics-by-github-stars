import React, { Fragment } from "react";
import Follower from "./Follower";

const Followers = ({ followers }) => (
  <Fragment>
    <p className="title is-4 has-text-centered">Followers</p>

    <div className="tile is-12 is-ancestor" style={{ flexWrap: "wrap" }}>
      {followers.map(follower => (
        <Follower key={follower.id} follower={follower} />
      ))}
    </div>
  </Fragment>
);

export default Followers;
