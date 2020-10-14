import React from "react";
import Card from "./Card";
function Cards({ handleNext, handleBack }) {
  return (
    <React.Fragment>
      <Card handleNext={handleNext} handleBack={handleBack} />
    </React.Fragment>
  );
}
export default Cards;
