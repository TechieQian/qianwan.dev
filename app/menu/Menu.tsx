import * as React from "react";

export default function TechList() {
  return (
    <aside className="column is-3">
      <div className="menu">
        <p className="menu-label">About</p>
        <ul className="menu-list">
          <li>
            <a>Me</a>
          </li>
          <li>
            <a>Website</a>
          </li>
        </ul>
        <p className="menu-label">Opinions</p>
        <ul className="menu-list">
          <li>
            <a>TypeScript</a>
          </li>
          <li>
            <a>ASP.NET</a>
          </li>
          <li>
            <a>React</a>
          </li>
          <li>
            <a>Redux</a>
          </li>
          <li>
            <a>Webpack</a>
          </li>
          <li>
            <a>Future of Webdev</a>
          </li>
        </ul>
        <p className="menu-label">Others</p>
        <ul className="menu-list">
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
