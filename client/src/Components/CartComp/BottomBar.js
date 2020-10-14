import React from "react";
import Card from "@material-ui/core/Card";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions/index";
import { Button } from "@material-ui/core";
function BottonBar(props) {
  //   const dispatch = useDispatch();
  //   const boxes = useSelector((state) => state.box.boxes);
  //   React.useEffect(() => {
  //     Actions.getAllBoxes(dispatch);
  //   }, []);
  return (
    <React.Fragment>
      <Card>
        <div className="d-flex">
          {props.items.map((p) => (
            <div>
              <div style={{ float: "left" }}>
                <img
                  src={p.image}
                  style={{ height: 50, width: 50, padding: "3px" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div style={{ float: "right" }}>
          <Button onClick={props.handleNext}>Complete Process</Button>
        </div>
      </Card>
    </React.Fragment>
  );
}
export default BottonBar;
