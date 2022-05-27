import React from "react";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const meetupData = {
      title: title,
      image: image,
      address: address,
      desc: desc,
    };

    props.onAddMeetup(meetupData);
  };
  return (
    <div>
      <div className={classes.card}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
          />
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            id="image"
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            id="address"
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
          <button>Add Meetup</button>
        </form>
      </div>
    </div>
  );
}

export default NewMeetupForm;
