import * as React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <NavLink to={"resume"}>Résumé</NavLink>
      <div>
        This page was created with React and TypeScript. Yes. Calling an
        airstrike on a tricycle.
        <p>© 2019 by qian</p>
      </div>
    </footer>
  );
}
