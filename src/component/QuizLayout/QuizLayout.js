import React from 'react';
import Answer from '../Answer/Answer';
import Questions from '../Questions/Questions';


const QuizLayout = ({eachQus}) => {
    const {question, options, correctAnswer} = eachQus;
    // console.log(eachQus)
    // console.log(options)
    return (
        <div className='bg-slate-500 text-white'>
            <Questions question={question}></Questions>
            <Answer options={options} correctAnswer={correctAnswer}></Answer>
        </div>
    );
};

export default QuizLayout;