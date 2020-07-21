import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import * as plantMatchService from "../../utils/plantMatchService";

// have a state - set it equal to the api that is fetched
// funtion getPlant

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

  // async handleDeletePlantMatch() {
  //   let plant = await plantMatchService.getAllMatches();
  //   await plantMatchService.deleteOne();
  //   this.setState(state => ({
  //     // Yay, filter returns a NEW array
  //     plantsArr: state.plantsArr.filter(plant => plant._id !== id)
  //   }))
  // }

  render() {
    // fetch array of plants with the logged in user id

    console.log(this.state.plantsArr);

    const plants = this.state.plantsArr.map((plant) => (
      <div>
        {plant.name}
        {plant.image}
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
      <div className="container">
        <div>{plants}</div>
        <div></div>
      </div>
    );
  }
}

export default PlantMatch;
