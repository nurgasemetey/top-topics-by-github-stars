import React from "react";

function Header() {
  return (
    <section className="hero is-primary center">
      <div className="hero-body">
        <div className="container">
          <p className="title is-1">
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>{" "}
            &nbsp; GitHub Profile Analyzer{" "}
          </p>
          <p className="subtitle is-3">Analyze a GitHub user</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
