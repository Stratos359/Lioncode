import React from "react";
import { Link } from "react-router-dom"
import topicIcon from '../assets/Group1.png'
import eventIcon from '../assets/Group2.png'
import '../css/Footer.css'

function Footer() {
    return(
        <div className="footer">
                <Link to={`/`} className="link">
                    <img className="footer-event-icon" src={eventIcon} alt="Events"></img>
                </Link>
                <img className="footer-topic-icon" src={topicIcon} alt="Topics"></img>
            </div>
    )
}

export default Footer;