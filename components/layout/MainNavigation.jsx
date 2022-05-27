import Link from "next/link";
import React from "react";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.navbar}>
        <div className={classes.title}>Meetups</div>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetups</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavigation;
