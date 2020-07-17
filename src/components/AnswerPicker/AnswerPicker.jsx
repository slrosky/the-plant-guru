import React from 'react';
import { Link } from 'react-router-dom';
import qData from '../../constants/QuestionData'
import './Quiz.css';

const AnswerPicker = ( props ) => {
    <div>
        {props.qData.map((answers) =>
        <button
            answer={answer}
        />
        )}
    </div>
};

export default Quiz;