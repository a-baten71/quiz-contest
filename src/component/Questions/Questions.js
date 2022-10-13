import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({question}) => {
    return (
        <div className=''>
            <h2 className='flex justify-center'><span>Quiz: {question}</span> <span><EyeIcon className="h-6 w-6 ml-12 text-white"/></span> </h2>
        </div>
    );
};

export default Questions;