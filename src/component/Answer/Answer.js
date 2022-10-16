import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScoreBoard from '../ScoreBoard/ScoreBoard';


const Answer = ({ options, correctAnswer }) => {
    const [correct, setCorrect] = useState([]);
    const [wrong, setWrong] = useState([]);


    const SelectAnswer = (event) => {
        event.target.disabled = true;
        // console.log(options.option)
        console.log(correctAnswer)
        if (event.target.value === correctAnswer) {
            toast("Correct Answer!");
            // console.log(true)
            const newValue = correct + 1;
            setCorrect(parseInt(newValue))
        }
        else {
            toast("Wrong Answer")
            // console.log(false)
            const newValue = wrong + 1;
            setWrong(parseInt(newValue))
        }


    };


    return (
        <div>
            
            <div className=' my-8 bg-black py-6'>
                {
                    options.map((option, idx) => <p className=' w-full py-4 bg-indigo-400 text-left' key={idx}>
                        <input onClick={SelectAnswer} className='' type="radio" name="quiz" id={option} value={option} />
                        <label className='ml-3' htmlFor={option}>{option}</label>
                        
                    </p>)


                }
                
            </div>
            {/* <ScoreBoard correct={correct} wrong={wrong}></ScoreBoard> */}
                <ToastContainer />
        </div>
    );
};

export default Answer;