import React from 'react';
import {useLoaderData} from 'react-router-dom';
import QuizLayout from '../QuizLayout/QuizLayout';

const QuizDetails = () => {
    let topic = useLoaderData()
    topic = topic.data;
    
    // console.log(topic.data.name)
   
    
    // console.log(topic.questions)
    return (
        
            
                
        <div>
            {
                topic.questions.map(eachQus => <QuizLayout key={eachQus.id} eachQus={eachQus}></QuizLayout>)
            }
      </div>
                
            

        
    );
};


export default QuizDetails;