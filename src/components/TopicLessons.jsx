import React from "react";
import locationIcon from '../assets/Group5.png'
import dateIcon from '../assets/Group7.png'
import timeIcon from '../assets/Group14.png'
import userIcon from '../assets/Group16.png'
import '../css/TopicLessons.css'

function TopicLessons({ lesson }) {

    return(
        <div className="lesson">
            <div className="lesson-title">
                 {lesson.title}
            </div>
            <div className="lesson-info">
                <div className="lesson-info-details">
                    <img src={timeIcon} alt="Time Icon" className="lesson-time-icon"/> <span className="lesson-info-time">{new Date(lesson.time_starts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12:false})}</span>
                    <img src={dateIcon} alt="Date Icon" className="lesson-date-icon"/> <span className="lesson-info-date">{lesson.date}</span>
                    <img src={locationIcon} alt="Location Icon" className="lesson-location-icon"/><span className="lesson-info-location">Address</span>
                </div>
                <img src={userIcon} alt="User Icon" className="lesson-user-icon"/>
            </div>
        </div>
    )
}

export default TopicLessons;