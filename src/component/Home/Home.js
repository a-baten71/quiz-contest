import React from 'react';
import Bannar from '../Bannar/Bannar'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData()
    return (
        <div>
            <div className='w-9/12 mx-auto '>
                <Bannar></Bannar>
                <div className=' grid md:grid-cols-4 gap-6 mt-10'>
                    {
                        topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;