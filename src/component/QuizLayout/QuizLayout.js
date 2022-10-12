import React from 'react';
import Answer from '../Answer/Answer';
import Questions from '../Questions/Questions';
import ShowQuestion from '../ShowQuestion/ShowQuestion';

const QuizLayout = ({eachQus}) => {
    const {question, options} = eachQus;
    console.log(question)
    console.log(options)
    return (
        <div className='bg-slate-500 text-white'>
            <Questions question={question}></Questions>
            <Answer options={options}></Answer>
        </div>
    );
};

export default QuizLayout;