let initialState = {
  cards: [],
};
const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CARDS":
      return {
        ...state,
        cards: action.payload,
      };

    default:
      return state;
  }
};
export default cardsReducer;
