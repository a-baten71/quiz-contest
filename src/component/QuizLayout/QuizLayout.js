import React from 'react';
import Answer from '../Answer/Answer';
import Questions from '../Questions/Questions';



const QuizLayout = ({eachQus}) => {

    const {question, options, correctAnswer} = eachQus;
    // console.log(correctAnswer)
    // console.log(eachQus)
    // console.log(options)
    // console.log(question)
    return (
        <div className='bg-slate-500 text-white grid grid-cols-2'>
            <div>
            <Questions question={question} correctAnswer={correctAnswer}></Questions>
            <Answer options={options} correctAnswer={correctAnswer}></Answer>
            </div>
            
        </div>
    );
};

export default QuizLayout;