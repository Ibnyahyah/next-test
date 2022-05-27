import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function AddNewMeetUp() {
  const router = useRouter();
  async function addMeetupHandler(meetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);

    router.push("/");
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default AddNewMeetUp;
