import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Answer = ({ options, correctAnswer }) => {

    const SelectAnswer = (event) => {
        // console.log(options.option)
        console.log(correctAnswer)
        if (event.target.value === correctAnswer) {
            toast("Correct Answer!");
            // console.log(true)
        }
        else {
            toast("Wrong Answer")
            console.log(false)
        }

    };


    return (
        <div className=' gap-12 my-8 '>
            {
                options.map((option, idx) => <p className='m-4 py-6 px-2 bg-indigo-400 text-left' key={idx}>
                    <input onClick={SelectAnswer} className='' type="radio" name="quiz" id={option} value={option} />
                    <label className='ml-3' htmlFor={option}>{option}</label>
                </p>)

            }
             <ToastContainer />
        </div>
        
    );
};

export default Answer;