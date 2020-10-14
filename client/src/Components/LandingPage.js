import React from "react";
import "../App.css";
import StepperComp from "../Styles/StepperComp";
import Boxes from "./BoxComponent/Boxes";
import Items from "./ItemsComponents/Items";
const LandingPage = () => {
  return (
    <div className="App">
      <div className="container">
        <StepperComp />
      </div>
    </div>
  );
};
export default LandingPage;
