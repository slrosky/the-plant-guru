import React from "react";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import * as plantMatchService from "../../utils/plantMatchService";

// have a state - set it equal to the api that is fetched
// funtion getPlant

const PlantMatch = ({plant}) => {
  // fetch array of plants with the logged in user id
  let plantsArr = plantMatchService.getAllMatches();
  console.log(plantsArr);

  return (
    <div className="container">
      <div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default PlantMatch;
