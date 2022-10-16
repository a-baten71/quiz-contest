import React from 'react';

const Bannar = () => {
    return (
        <div className='relative'>

            <div className=''>
                <img className=' w-full h-64' src="https://media.istockphoto.com/photos/questionnaire-with-checkboxes-filling-survey-form-online-answer-picture-id1398473177?k=20&m=1398473177&s=612x612&w=0&h=joPGV2HaYjT1q0EbUv5R9RjsSZuMgc2-e_9YHYBjNk4=" alt="" />
                
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-700'>
                    <h2 className='text-5xl font-bold'>Knowledge is Fun</h2>
                    <p className='text-2xl  mt-3 text-gray-900 font-semibold'>Experiences that are designed for groups of all sizes and skill levels</p>
                </div>
                
        </div>
    );
};

export default Bannar;