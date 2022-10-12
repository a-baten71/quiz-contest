import React from 'react';

const QuizShocase = ({topic}) => {
    console.log(topic.name)
    const {logo, name} = topic;
    console.log(name)
    return (
        <div>
            <img src={logo} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default QuizShocase;