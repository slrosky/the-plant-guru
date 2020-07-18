import React, { Component } from "react";
import { Link } from "react-router-dom";
// import qData from "../../constants/QuestionData";
import "./Quiz.css";

class Quiz extends Component {
  state = {
    userAnswers: [],
    answers: {
      Q1: null,
      Q2: null,
    },
  };

  handleUpdateChoice = (e) => {
    let answersCopy = this.state.answers;
    answersCopy[e.target.name] = e.target.value;
    console.log(e.target.checked);
    // this.setState({ checked: !this.state.checked });
    // console.log(this.state.checked);
  };

  // handleSubmitQuiz = () => {

  // }

  // updateUserAnswers = () => {
  // };

  render() {
    console.log(this.props.qData);
    console.log(this.state.checked);
    return (
      <div>
        <div>
          <form>
            <label>
              I have access to a lot of direct sunlight inside my home.
            </label>
            <input
              type="checkbox"
              value="Yes"
              name="Q1"
              onChange={this.handleUpdateChoice}
            />
            Yes
            <input
              type="checkbox"
              value="No"
              name="Q1"
              onChange={this.handleUpdateChoice}
            />
            No
            <br></br>
            <label>Question 2</label>
            <input
              type="checkbox"
              value="Yes"
              name="Q2"
              onChange={this.handleUpdateChoice}
            />
            Yes
            <input
              type="checkbox"
              value="No"
              name="Q2"git
              onChange={this.handleUpdateChoice}
            />
            No
          </form>
        </div>
        <div>{this.props.plant.common_name}</div>
        <div>
          <img src={this.props.plant.image_url} alt="" />
        </div>
      </div>
    );
  }
}

export default Quiz;
