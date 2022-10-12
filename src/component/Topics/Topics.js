import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData()
    // console.log(topics)
    const [topic, setTopic] = useState([]);
    const getTopic = ()=> {
        setTopic(topic)
    }
    return (
        <div className='w-9/12 grid grid-cols-4 gap-6  mx-auto'>
            {
                topics.data.map(topic => <Topic key={topic.id} topic = {topic} getTopic = {getTopic}></Topic>)
            }
        </div>
    );
};

export default Topics;