
import React from 'react';

import {useLoaderData} from 'react-router-dom';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData()
    console.log(topics)
    
    return (
        <div className=' w-9/12 mx-auto'>
            {/* <ScoreBoard></ScoreBoard> */}
            <div className=' grid md:grid-cols-4 gap-6  '>
            {
                topics.data.map(topic => <Topic key={topic.id} topic = {topic}></Topic>)
            }
        </div>
        </div>
    );
};

export default Topics;