import React from "react";
import Repos from "./Repos";
import User from "./User";
import Followers from "./Followers";

export default function UserInfo({ user }) {
  const createdYear = user.created_at.getFullYear();
  const actualYear = new Date().getFullYear();
  const moreThanOneYear = actualYear - createdYear > 1;

  const joined_at = moreThanOneYear
    ? `${actualYear - createdYear} years`
    : "less than one year";

  return (
    <section className="section">
      <div className="container is-fluid">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h1 className="title is-2 has-text-centered">
              Overview for{" "}
              <span className="has-text-primary">{user.login}</span>
            </h1>
            <p className="has-text-centered is-size-6">
              Joined GitHub <strong>{joined_at} ago</strong>{" "}
              <time className="is-size-6" dateTime={user.created_at}>
                ({user.created_at.toDateString()})
              </time>
            </p>

            <User user={user} />

            <Followers followers={user.followers_info} />

            <Repos repos={user.repos} />
          </div>
        </div>
      </div>
    </section>
  );
}
