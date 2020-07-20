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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmitQuiz()
    // parses results and sets state to result
  };

  // updateUserAnswers = () => {
  // };

  render() {
    return (
      <div>
        <div>
          <h2>
            IN ORDER TO FIND YOUR SOULMATE PLANT, WE HAVE TO LEARN A LITTLE MORE
            ABOUT YOU
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="quizQuestion">
              <label>How Much Light Does Your Home Get?</label>
              <br></br>
              <input
                type="radio"
                class="container"
                value="A"
                name="No Light"
                onChange={this.handleUpdateChoice}
              />
              No Light
              <br></br>
              <input
                type="radio"
                value="B"
                name="Low Light"
                onChange={this.handleUpdateChoice}
              />
              Low Light
              <br></br>
              <input
                type="radio"
                value="C"
                name="Mid Light"
                onChange={this.handleUpdateChoice}
              />
              Mid Light
              <br></br>
              <input
                type="radio"
                value="D"
                name="Lots of Light"
                onChange={this.handleUpdateChoice}
              />
              Lots of Light
            </div>
            <div className="quizQuestion">
              <label>How often are you home?</label>
              <br></br>
              <input
                type="radio"
                value="A"
                name="All the time, I'm a homebody"
                onChange={this.handleUpdateChoice}
              />
              All the time, I'm a homebody
              <br></br>
              <input
                type="radio"
                value="B"
                name="I live my life, but am not away for long extended periods
                frequently"
                onChange={this.handleUpdateChoice}
              />
              I live my life, but am not away for long extended periods
              frequently
              <br></br>
              <input
                type="radio"
                value="C"
                name="I'm never home, I travel all the time"
                onChange={this.handleUpdateChoice}
              />
              I'm never home, I travel all the time
            </div>
            <div className="quizQuestion">
              <label>Do you like flowers or leafy ladies?</label>
              <br></br>
              <input
                type="radio"
                value="A"
                name="Pretty flowers please"
                onChange={this.handleUpdateChoice}
              />
              Pretty flowers please
              <br></br>
              <input
                type="radio"
                value="B"
                name="Leafy ladies"
                onChange={this.handleUpdateChoice}
              />
              Leafy ladies
            </div>
            <div className="quizQuestion">
              <label>What's the average temp of your home?</label>
              <br></br>
              <input
                type="radio"
                value="A"
                name="Basically live in a frozen tundra"
                onChange={this.handleUpdateChoice}
              />
              Basically live in a frozen tundra
              <br></br>
              <input
                type="radio"
                value="B"
                name="Average mild temps, know you, just perfect"
                onChange={this.handleUpdateChoice}
              />
              Average mild temps, know you, just perfect
              <br></br>
              <input
                type="radio"
                value="C"
                name="The mother flipping desert! Hot Hot Baby!"
                onChange={this.handleUpdateChoice}
              />
              The mother flipping desert! Hot Hot Baby!
            </div>
            <div className="quizQuestion">
              <label>
                Do you want your plants to be pretty all the time, or can they
                take a snooze during certain seasons?
              </label>
              <br></br>
              <input
                type="radio"
                value="A"
                name="They better be ripe and ready for instagram whenever I damn well please"
                onChange={this.handleUpdateChoice}
              />
              They better be ripe and ready for instagram whenever I damn well
              please
              <br></br>
              <input
                type="radio"
                value="B"
                name="I'm paying money, so I'd like them to be visible, but I understand everyone needs rest"
                onChange={this.handleUpdateChoice}
              />
              I'm paying money, so I'd like them to be visible, but I understand
              everyone needs rest
              <br></br>
              <input
                type="radio"
                value="C"
                name="Plants are plants and I respect their needs, whatever those may be"
                onChange={this.handleUpdateChoice}
              />
              Plants are plants and I respect their needs, whatever those may be
            </div>
            <div className="quizQuestion">
              <label>Is it in the air?</label>
              <br></br>
              <input
                type="radio"
                value="A"
                name="Humidity is my middle name."
                onChange={this.handleUpdateChoice}
              />
              Humidity is my middle name.
              <br></br>
              <input
                type="radio"
                value="B"
                name="Dry air"
                onChange={this.handleUpdateChoice}
              />
              Dry air
              <br></br>
              <input
                type="radio"
                value="C"
                name="Mild/Average humidity"
                onChange={this.handleUpdateChoice}
              />
              Mild/Average humidity
            </div>
            <div className="Submit">
              <input type="submit" value="Get My Plant Matches!" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Quiz;
