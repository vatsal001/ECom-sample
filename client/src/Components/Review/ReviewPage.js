import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions/index";
function Review() {
  const boxes = useSelector((state) => state.box.boxes[0]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    Actions.getAllBoxes(dispatch);
  }, []);
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="f-left">
          <img src={boxes.image} style={{ height: 300, width: 300 }} />
        </div>
        <div className="f-right">
          <div>
            <h5>Your gift-box:</h5>
            <span>Color: {boxes.boxColor}</span>
            <pan>Price: {boxes.Price}</pan>
          </div>
          <div>
            <h5>Your Items:</h5>
            {boxes.items.map((b) => (
              <li>
                <span>
                  {b.Name} Rs.{b.Price}
                </span>
              </li>
            ))}
          </div>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Review;
