import React from "react";
import { Link } from "react-router-dom";
import "./QuizPage.css";
import Quiz from "../../components/Quiz/Quiz";

const QuizPage = (props) => {
  return (
    <div className="QuizPage">
      <Quiz
        qData={props.qData}
        handleUpdateChoice={props.handleUpdateChoice}
        handleSubmitQuiz={props.handleSubmitQuiz}
        plant={props.plant}
        history={props.history}
      />
    </div>
  );
};

export default QuizPage;
