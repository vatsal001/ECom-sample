import React from "react";
import { combineReducers } from "redux";
import boxReducer from "./boxReducer";
import itemsReducer from "./itemsReducer";
import cardsReducer from "./cardReducer";
export default combineReducers({
  box: boxReducer,
  items: itemsReducer,
  cards: cardsReducer,
});
