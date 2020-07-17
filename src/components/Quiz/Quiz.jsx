import React, { Component } from "react";
import { Link } from "react-router-dom";
// import qData from "../../constants/QuestionData";
import "./Quiz.css";

class Quiz extends Component {
  state = {
    option: false,
    userAnswers: [],
  };

  // handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {

  //     } catch (err) {
  //     }
  // }
  render() {
    console.log(this.props.qData);
    return (
      <div>
        <header className="header-footer">Match Quiz</header>
        <form>
          {this.props.qData.map((item) => {
            return (
              <div className="quizQuestion">
                <label>{item.question}</label>
                {item.options.map((option) => {
                  return (
                        <div className="quizOption">
                          <label>{option}</label>
                          <input type="checkbox" value={option}></input>
                        </div>
                  ) 
                })}
              </div>
            );
          })}
        </form>
      </div>
    );
  }
}

export default Quiz;
