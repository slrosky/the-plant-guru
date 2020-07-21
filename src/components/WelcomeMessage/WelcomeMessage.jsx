import React from "react";
import { Link } from "react-router-dom";
import "./WelcomeMessage.css";

const WelcomeMessage = (props) => {
  return (
    <div >
      { props.user ? (
        <div className="WelcomePage">
          <h1>
            TAKE THE <img src="https://i.imgur.com/wVLQhFC.png" /> GURU{" "}
            <Link to="/quiz" className="QuizLink">
              QUIZ
            </Link>{" "}
            TO FIND OUT WHICH PLANT IS RIGHT FOR YOU
          </h1>
        </div>
      )
      : (
        <div className="WelcomeMsgUser">
          <div className="WelcomeTitle">
            <h1>THE <img src="https://i.imgur.com/wVLQhFC.png" /> GURU</h1>
            <p>Which plant is right for you?</p>
          </div>
        </div>
      )
    }
    </div>
  );
};

export default WelcomeMessage;
