import React, { useEffect } from "react";
import "./cards.css";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions/index";
function Card(props) {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  useEffect(() => {
    Actions.getAllCards(dispatch);
  }, []);
  console.log(cards);
  return (
    <React.Fragment>
      <h2 className="mt-5">CHOOSE YOUR PIECE OF HEAVEN</h2>
      <p>
        Choose the perfect card for the occasion from our section of exclusive
        designs and upload two of your photos.
      </p>
      <div className="cards">
        {cards.map((c) => (
          <div className="cards-card">
            <div className="cards-img">
              <img src={c.image} style={{ height: 500, width: 500 }} />
            </div>
            <div>
              <h3>{c.Color}</h3>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default Card;
