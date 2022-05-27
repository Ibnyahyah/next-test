import { MongoClient, ObjectId } from "mongodb";

import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.desc}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://newuser:Ridwan2085@cluster0.iesmw.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // Fecth data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://newuser:Ridwan2085@cluster0.iesmw.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetups = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  console.log(selectedMeetups);
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetups._id.toString(),
        image: selectedMeetups.image,
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        desc: selectedMeetups.desc,
      },
    },
  };
}
export default MeetupDetails;
