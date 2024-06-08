import React, { useState } from "react";
import TopicLessons from "./TopicLessons";
import '../css/EventTopics.css'

function EventTopics({ topic, index }) {
    const [openTopicIndex, setOpenTopicIndex] = useState(null);
    const [clickedTopic, setClickedTopic] = useState(null);

    const handleTopicClick = (index) => { // Open the selected topic to show the topics lessons
        setClickedTopic(index);
        setOpenTopicIndex(openTopicIndex === index ? null : index);
        setTimeout(() => setClickedTopic(null), 250);
    } 
    
    return(
        <React.Fragment key={index}>
            <div className={`topic ${openTopicIndex === index ? 'open' : ''} ${clickedTopic === index ? 'clicked' : ''}`} onClick={() => handleTopicClick(index)}>
                <div className="topic-title">
                    {topic.topic_name}
                </div>
                <div className={`topic-arrow ${openTopicIndex === index ? 'open' : ''}`}></div>
            </div>
            {openTopicIndex === index && (
                <div>
                    {topic.topic_content.lessons.map( lesson => ( // Map over the selected topics lessons and create a TopicsLessons component for each lesson
                        <TopicLessons key={lesson.title} lesson={lesson}></TopicLessons>
                    ))}
                </div>
            )}
        </React.Fragment>
    )
}

export default EventTopics;