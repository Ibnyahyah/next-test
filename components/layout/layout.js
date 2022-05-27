import React from 'react'
import MainNavigation from './MainNavigation';
import classes from './layout.module.css';

export default function Layout(props) {
  return (
    <div>
      <MainNavigation/>
      <div className={classes.main}>{props.children}</div>
    </div>
  )
}
