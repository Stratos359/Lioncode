
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/EventsList.css";
import "../css/EventDetail.css";
import returnIcon from '../assets/return.png'
import searchIcon from '../assets/search.png'
import Footer from "./Footer";
import EventTopics from "./EventTopics";

function EventDetail() {
    const location = useLocation();
    const { topics } = location.state || {};
    

    return (
        <div className="wrapper">
            <div className="content">
                <div className="content-header-details">
                    <Link to={`/`} className="link"> {/* Link to the events page */}
                        <img src={returnIcon} alt="Return" className="return-icon"/>
                    </Link>
                    <img src={searchIcon} alt="Search" className="search-icon"/>
                </div>
                <div className="selection">
                    <div className="schedule">SCHEDULE</div>
                    <div className="tab1">TAB1</div>
                    <div className="tab2">TAB2</div>
                    <div className="tab3">TAB3</div>
                </div>
                <div className="seperator-selection"></div>
                <div className="content-topics">
                    {topics.map( (topic, index) => ( //maps over the topics array and creates an EventTopics component for each topic
                        <EventTopics key={topic.topic_content.topic_id} topic={topic} index={index}></EventTopics>
                    ))}
                </div>
            </div>
            <div className="seperator seperator-detail"></div>
            <Footer></Footer>
        </div>
    )
}

export default EventDetail;