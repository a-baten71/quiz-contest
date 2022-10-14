import React from 'react';

import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({question, correctAnswer}) => {

    const CorrectAns =()=>{
        toast(correctAnswer)
    }
  console.log(question)
    return (
        <div className=''>
            <h2 className='flex justify-center'>Quiz: {question} <EyeIcon onClick={CorrectAns} className="h-6 w-6 ml-12 text-black"/></h2>
            

            <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Questions;