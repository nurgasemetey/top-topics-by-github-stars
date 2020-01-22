import React from "react";
import Repos from "./Repos";
import User from "./User";

function UserInfo({ user }) {
  const spanStyle = { color: "hsl(171, 100%, 41%)" };

  return (
    <section className="section">
      <div className="container is-fluid">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h1 className="title is-3 center">
              Overview for <span style={spanStyle}>{user.login}</span>
            </h1>
            <p className="center">
              Joined GitHub{" "}
              <strong>
                {new Date().getFullYear() - user.created_at.getFullYear()} years
                ago
              </strong>{" "}
            </p>

            <User user={user} />

            <Repos repos={user.repos_info}></Repos>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
