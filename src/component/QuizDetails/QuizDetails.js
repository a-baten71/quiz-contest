import React from 'react';
import {useLoaderData}  from 'react-router-dom'
import QuizLayout from '../QuizLayout/QuizLayout';


const QuizDetails = () => {
    let topic = useLoaderData()
topic = topic.data;

    return (
        <div className=' w-9/12 mx-auto'>
        {
            topic.questions.map(eachQus => <QuizLayout key={eachQus.id} eachQus={eachQus}></QuizLayout>)
        }
  </div>
    );
};

export default QuizDetails;

        
            
    