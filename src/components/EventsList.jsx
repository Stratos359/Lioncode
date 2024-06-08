import React from "react";
import { useQuery } from "@tanstack/react-query";
import '../css/EventsList.css'
import logo from '../assets/Logo.png'
import Footer from "./Footer";
import EventCard from "./EventCard";
import Skeleton from "./Skeleton";

const fetchEvents = async () => {
    const response = await fetch('http://testlc.lncdoo.com/api/myprofile/events'); // Request data from the endpoint
    const data = await response.json();
    return Object.values(data)[1].filter(item => item.is_inclass === true); // Convert data to an array to filter the events with the class is_inclass
}

function EventsList() {
    const { data: events, isLoading} = useQuery({ // Used React Query to cache the data fetched and reduce the need for repeated fetches every time the page is loaded
        queryKey: ['events'],
        queryFn: fetchEvents,
    });


    return (
        <div className="wrapper">
            <div className="content">
                <div className="content-header">
                    <img src={logo} alt="Lioncode Logo"></img>
                </div>
                <div className='content-events'>
                    {isLoading ? <Skeleton></Skeleton> : ( // If the fetched data are not loaded, show the Skeleton component
                        <div>
                            {events.map(event => ( // Map over the events data and create an EventCard component for each event
                                <EventCard key={event.event.id} event = { event }></EventCard>
                            ))}
                        </div> 
                    )}
                </div>
            </div>
            <div className="seperator"></div>
            <Footer></Footer>
        </div>
    )
}

export default EventsList;