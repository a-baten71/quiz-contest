import React from 'react';
import Answer from '../Answer/Answer';
import Questions from '../Questions/Questions';
import ScoreBoard from '../ScoreBoard/ScoreBoard';



const QuizLayout = ({ eachQus }) => {

    const { question, options, correctAnswer } = eachQus;
    // console.log(correctAnswer)
    // console.log(eachQus)
    // console.log(options)
    // console.log(question)
    return (
        <div className=' w-full'>
            <div className='w-full'>
                <Questions question={question} correctAnswer={correctAnswer}></Questions>
                <Answer options={options} correctAnswer={correctAnswer}></Answer>
                
            </div>

        </div>
    );
};

export default QuizLayout;