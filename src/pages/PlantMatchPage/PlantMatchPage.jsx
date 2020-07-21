import React from "react";
import { Link } from "react-router-dom";
import "./PlantMatchPage.css";
import PlantMatch from "../../components/PlantMatch/PlantMatch";

const PlantMatchPage = (props) => {
  return (
    <div className="PlantMatchPage">
      <h2>Take a look at your plant matches!</h2>
      <PlantMatch
        plant={props.plant}
        handleDeleteMatch={props.handleDeleteMatch}
      />
    </div>
  );
};

export default PlantMatchPage;
