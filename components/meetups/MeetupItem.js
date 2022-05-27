import Image from "next/image";
import React from "react";
import classes from "./MeetupItem.module.css";
import IMAGE from "../../public/ilorin-mosque.jpg";
import {useRouter} from 'next/router';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler(){
    router.push('/'+props.id);
  }
  return (
    <div className={classes.MeetupList}>
      <div className={classes.card}>
        <img src={props.image ? props.image : IMAGE} alt={props.title} />
        <div className={classes.content}>
          <h4>{props.title}</h4>
          <p>
            <i>{props.address}</i>
          </p>
          <button className={classes.button} onClick={showDetailsHandler}>Show Details</button>
        </div>
      </div>
    </div>
  );
}

export default MeetupItem;
