import React from "react";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

// have a state - set it equal to the api that is fetched
// funtion getPlant

const PlantMatch = (props) => {
  return (
    <div className="container">
      <div>
        <h3>{props.plant.common_name}</h3>
      </div>
      <div className="plantImage">
        <img src={props.plant.image_url} alt="" />
      </div>
    </div>
  );
};

export default PlantMatch;
