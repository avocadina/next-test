import React from "react";

import classes from "./header.module.scss";

export default function Header() {
  return (
    <div className="column">
      <div className={`${classes.logo}`}></div>
      <nav className={`${classes.nav}`}>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  );
}
