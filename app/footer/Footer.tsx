import * as React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        This page was created with React and TypeScript. Yes. Calling an
        airstrike on a tricycle.{" "}
        <NavLink to={"resume"}>Download my résumé</NavLink>
        <p style={{ marginTop: "5px" }}>© 2019 by qian</p>
      </div>
    </footer>
  );
}
