let initialState = {
  boxes: [],
  box: null,
};
const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_BOXES":
      return {
        ...state,
        boxes: action.payload,
      };
    case "GET_BOX":
      return {
        ...state,
        box: action.payload,
      };
    case "UPDATE_BOX":
      return {
        ...state,
        boxes: action.payload,
      };
    default:
      return state;
  }
};
export default boxReducer;
