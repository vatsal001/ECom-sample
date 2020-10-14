import React, { useState, useEffect } from "react";
import "./box.css";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions/index";
function Box(props) {
  const boxes = useSelector((state) => state.box.boxes);
  const dispatch = useDispatch();
  useEffect(() => {
    Actions.getAllBoxes(dispatch);
  }, []);

  return (
    <React.Fragment>
      <h2 className="mt-5">
        <b>SELECT A BOX</b>
      </h2>
      <p>Choose a Packaging that speaks to your loved one's styles</p>
      <div className="boxes">
        {boxes.map((b) => (
          <div
            className="box-card"
            onClick={() => {
              props.handleNext();
              window.localStorage.setItem("box", b._id);
            }}
          >
            <div className="box-img">
              <img src={b.image} style={{ height: 500, width: 500 }} />
            </div>
            <div>
              <h3>{b.boxColor}</h3>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default Box;
