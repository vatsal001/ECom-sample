import React from "react";
import Box from "./Box";
function Boxes({ handleNext }) {
  return (
    <React.Fragment>
      <Box handleNext={handleNext} />
    </React.Fragment>
  );
}
export default Boxes;
