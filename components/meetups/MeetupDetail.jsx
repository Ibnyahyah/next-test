import React from "react";
import Image from "next/image";
import classes from "./MeetupDetails.module.css";

function MeetupDetail(props) {
  return (
    <div className={classes.MeetupList}>
      <div className={classes.card}>
        <img src={props.image} alt={props.title} />
        <div className={classes.content}>
          <h4>{props.title}</h4>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MeetupDetail;
