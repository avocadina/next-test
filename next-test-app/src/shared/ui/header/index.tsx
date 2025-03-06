import React from "react";

import classes from "./header.module.scss";
import { Button } from "~/src/shared/ui/button";

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
      <Button 
        typeButton="dark"
        size="regular"
      >
        <p className={`uppercase`}>Заказать услугу</p>
      </Button>
    </div>
  );
}
