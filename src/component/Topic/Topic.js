import React from 'react';
import {Link} from 'react-router-dom'
const Topic = ({topic}) => {
    // console.log(topic)
    const {name, logo, id} = topic;
    return (
        <div className='bg-slate-800 text-white rounded-md'>
            <img className='' src={logo} alt="" />
            <h4 className='text-xl font-bold my-3'>{name}</h4>
            <button className='bg-indigo-500 rounded-md py-2 w-full text-lg font-bold'><Link to={`/topic/${id}`}>Quiz Start</Link></button>
            
        </div>
    );
};

export default Topic;