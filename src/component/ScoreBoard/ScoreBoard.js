import React from 'react';

const ScoreBoard = (correct, wrong, eachQus) => {
    // console.log()
    return (
        <div className='flex justify-around text-lg font-bold text-white rounded  items-center h-20 bg-indigo-400 mt-20 mb-8'>
            {/* <h3>Total Questions : {question.length}</h3> */}
            <h3>Correct Answer : </h3>
            <h3>Wrong Answer : </h3>
            
        </div>
    );
};

export default ScoreBoard;