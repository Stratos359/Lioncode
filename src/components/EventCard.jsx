import React from "react";
import { Link } from "react-router-dom"
import locationIcon from '../assets/Group5.png'
import dateIcon from '../assets/Group7.png'
import eventArrowIcon from '../assets/eventIcon.png'
import '../css/EventCard.css'

function EventCard({ event }) {

    return(
        <Link to={`/event/${event.event.id}`} className="link" state={{topics: event.topics}}> {/*Link to the event details page for the event selected */}
            <div className="event-card">
                <div className="event-card-title">
                    {event.event.title}
                </div>
                <div className="event-info">
                    <div className="event-card-info-details">
                        <img className="event-location-icon" src={locationIcon} alt="Location"></img> <span className="event-card-info-city">Athens</span>
                        <img className="event-date-icon" src={dateIcon} alt="Date"></img> <span className="event-card-info-date">{event.date}</span>
                    </div>
                    <img className="event-arrow-icon" src={eventArrowIcon} alt="Event Icon" />
                </div>
            </div>
        </Link>
    )
}

export default EventCard;