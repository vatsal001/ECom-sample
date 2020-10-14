import axios from "axios";
export const getAllBoxes = (dispatch) => {
  const request = axios.get(`http://localhost:5000/box/boxes`);
  request.then((response) => {
    return dispatch({
      type: "GET_ALL_BOXES",
      payload: response.data.boxes,
    });
  });
};
export const getAllItems = (dispatch) => {
  const request = axios.get(`http://localhost:5000/item/items`);
  request.then((response) => {
    return dispatch({
      type: "GET_ALL_ITEMS",
      payload: response.data.items,
    });
  });
};

export const updateBox = (dispatch, id, data) => {
  const request = axios.put(`http://localhost:5000/box/updatebox/${id}`, data);
  request.then((response) => {
    return dispatch({
      type: "UPDATE_BOX",
      payload: response.data.box,
    });
  });
};
export const getAllCards = (dispatch) => {
  const request = axios.get("http://localhost:5000/card/cards");
  request.then((response) => {
    return dispatch({
      type: "GET_ALL_CARDS",
      payload: response.data.cards,
    });
  });
};
// export const getBox = (dispatch) => {
//   const request = axios.get("http://localhost:5000/box/boxes");
//   request.then((response) => {
//     return dispatch({
//       type: "GET_BOX",
//       payload: response.data.boxes[0],
//     });
//   });
// };
