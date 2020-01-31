import React, { Fragment } from "react";
import Follower from "./Follower";

export default function Followers({ followers }) {
  const divStyle = {
    flexWrap: "wrap"
  };

  return (
    <Fragment>
      <p className="title is-4 has-text-centered">Followers</p>

      <div className="tile is-12 is-ancestor" style={divStyle}>
        {followers.map(follower => (
          <Follower key={follower.id} follower={follower} />
        ))}
      </div>
    </Fragment>
  );
}
