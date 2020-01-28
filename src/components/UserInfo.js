import React from "react";
import Repos from "./Repos";
import User from "./User";

export default function UserInfo({ user }) {
  return (
    <section className="section">
      <div className="container is-fluid">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h1 className="title is-3 has-text-centered">
              Overview for{" "}
              <span className="has-text-primary">{user.login}</span>
            </h1>
            <p className="has-text-centered">
              Joined GitHub{" "}
              <strong>
                {new Date().getFullYear() - user.created_at.getFullYear()} years
                ago
              </strong>{" "}
            </p>

            <User user={user} />

            <Repos repos={user.repos} />
          </div>
        </div>
      </div>
    </section>
  );
}
