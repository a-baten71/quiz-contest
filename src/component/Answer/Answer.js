import React from 'react';

const Answer = ({options}) => {
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                options.map(option => <label className='border'><input type="radio" name="" id="" /> {option}</label>)
            }
        </div>
    );
};

export default Answer;