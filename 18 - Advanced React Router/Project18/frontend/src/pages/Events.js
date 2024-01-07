import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  // if (events.isError) {
  //   return <p>{events.message}</p>
  // }
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    console.log("error");
    //return {isError: true, message: 'Could not fetch events.'}
    throw {message: 'Could not fetch events.'}
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
