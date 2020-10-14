import React from "react";
import Item from "./Item";
const Items = ({ handleNext }) => {
  return (
    <React.Fragment>
      <Item handleNext={handleNext} />
    </React.Fragment>
  );
};
export default Items;
