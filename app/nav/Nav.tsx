import * as React from "react";

export default function Nav(props) {
  return (
    <header className="container">
      <section className="header-top">
        <h1 className="title">Qian Wan</h1>
        <h2 className="subtitle">
          <span>Software Engineer</span>
        </h2>
        <section>
          <span className="icon">
            <i className="fab fa-github fa-lg" />
          </span>
          <span className="icon">
            <i className="fab fa-linkedin fa-lg" />
          </span>
          <span className="icon">
            <i className="fa fa-envelope fa-lg" />
          </span>
          <span className="icon">
            <i className="fab fa-twitter fa-lg" />
          </span>
        </section>
      </section>
    </header>
  );
}
