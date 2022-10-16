import React from 'react';
import { Link } from 'react-router-dom'
import { ArrowLongRightIcon} from '@heroicons/react/24/solid';
const Topic = ({ topic }) => {
    // console.log(topic)
    const { name, logo, id } = topic;
    return (
        <div className=' text-white rounded-md bg-slate-500'>
            <img className='h-36 w-full' src={logo} alt="" />
            <div className='grid grid-cols-2 rounded-md justify-start gap-x-2 bg-indigo-500'>
                <h4 className='text-xl text-left pl-3 font-bold my-3 '>{name}</h4>
                <button className=' rounded-md py-2 w-full text-lg font-bold'><Link to={`/topic/${id}`}><span>Quiz Start</span> <ArrowLongRightIcon className="h-6 font-bold w-6 inline  text-white" /></Link></button>
            </div>

        </div>
    );
};

export default Topic;