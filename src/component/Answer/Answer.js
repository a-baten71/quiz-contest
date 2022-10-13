import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Answer = ({ options, correctAnswer }) => {

    const handleChange = (event) => {
        // console.log(options.option)
        // console.log(correctAnswer)
        if (event.target.value === correctAnswer) {
            toast("Correct Answer!");
        }
        else {
            toast("Wrong Answer")
        }

    };


    return (
        <div className='grid grid-cols-4 gap-12 my-8 '>
            {
                options.map((option, idx) => <p className='m-4 py-6 px-2 bg-indigo-400 text-left' key={idx}>
                    <input onClick={handleChange} className='' type="radio" name="quiz" id={option} value={option} />
                    <label className='ml-3' htmlFor={option}>{option}</label>
                </p>)

            }
             <ToastContainer />
        </div>
        
    );
};

export default Answer;