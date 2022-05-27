import { MongoClient } from "mongodb";

import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 1,
    image:
      "https://www.nairaland.com/attachments/9239153_5703443172674772431143661592299212370658514698240njpegb1261da3577ee1dbc4fad54bd8b46a2f_jpeg_jpegd7b7c5e1859100ed8c21f45ab6e7eeef",
    title: "A first Meetup",
    address: "Akure Akure oni",
    description: "Akure Akure oni",
  },
  {
    id: 2,
    image:
      "https://www.nairaland.com/attachments/9239153_5703443172674772431143661592299212370658514698240njpegb1261da3577ee1dbc4fad54bd8b46a2f_jpeg_jpegd7b7c5e1859100ed8c21f45ab6e7eeef",
    title: "A first Meetup",
    address: "Akure Akure oni",
    description: "Akure Akure oni",
  },
  {
    id: 3,
    image:
      "https://www.nairaland.com/attachments/9239153_5703443172674772431143661592299212370658514698240njpegb1261da3577ee1dbc4fad54bd8b46a2f_jpeg_jpegd7b7c5e1859100ed8c21f45ab6e7eeef",
    title: "A first Meetup",
    address: "Akure Akure oni",
    description: "Akure Akure oni",
  },
];

function AllMeetups(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedMeetups, setLoadedMeetups] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    // fetch("https://wedo-diary-default-rtdb.firebaseio.com/meetups.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     const meetups = [];

    //     for (const key in data) {
    //       const meetup = {
    //         id: key,
    //         ...data[key],
    //       };

    //       meetups.push(meetup);
    //     }

    // });
    // setLoadedMeetups(meetups);
    setLoadedMeetups(DUMMY_DATA);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    // return (
    //   <section className="loader">
    //     <p>C</p>
    //   </section>
    // );
  }
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // Fetch data from an api

//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }
export async function getStaticProps() {
  // fetch data from an api
  const client = await MongoClient.connect(
    "mongodb+srv://newuser:Ridwan2085@cluster0.iesmw.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default AllMeetups;
