import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import * as plantMatchService from "../../utils/plantMatchService";
import "./PlantMatch.css";

class PlantMatch extends Component {
  state = {
    plantsArr: [],
  };

  async componentDidMount() {
    let plantsArr = await plantMatchService.getAllMatches();
    this.setState({ plantsArr });
  }

  newMatch = (id) => {
    let newArr = this.state.plantsArr.filter((p) => p._id !== id);
    console.log("this is the new array", newArr);
  };

  render() {
    console.log(this.state.plantsArr);

    const plants = this.state.plantsArr.map((plant) => (
      <div>
        {plant.name}
        <img src={`${plant.image}`}></img>
        <button
          onClick={() => {
            this.newMatch(plant._id);
            this.props.handleDeleteMatch(plant._id);
          }}
        >
          X
        </button>
      </div>
    ));

    return (
      <div className="PlantMatchListItem">
        <div className="PlantMatchListItem">{plants}</div>
        <div className="PlantMatchListItemLink">
          Want another match? Take the <Link to="/quiz">Quiz</Link> Again
        </div>
      </div>
    );
  }
}

export default PlantMatch;
