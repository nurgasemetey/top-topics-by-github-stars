import React from "react";

const Header = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title is-1 is-size-4-mobile">
          <span className="icon">
            <i className="fab fa-github" />
          </span>{" "}
          &nbsp; GitHub Profile Analyzer{" "}
        </p>
        <p className="subtitle is-3 is-size-6-mobile">Analyze a GitHub user</p>
      </div>
    </div>
  </section>
);

export default Header;
