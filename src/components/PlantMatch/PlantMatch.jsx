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

  async handleDeletePlantMatch (plant) {
    // await plantMatchService.deleteOne(plant);
    // this.setState(state => ({
    //   // Yay, filter returns a NEW array
    //   plantsArr: state.plantsArr.filter(plant => plant._id !== id)
    // }), () => this.props.history.push('/'));
  }

  render() {
    // fetch array of plants with the logged in user id

    console.log(this.state.plantsArr);

    const plants = this.state.plantsArr.map((plant) => <div>{plant.name}{plant.image}</div>);

    return (
      <div className="container">
        <div>
          {plants}
          <button
            // onClick={() => handleDeletePlantMatch(plant._id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default PlantMatch;
