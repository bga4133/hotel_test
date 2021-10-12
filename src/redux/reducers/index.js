import { SEND_INFO, DELETE_INFO } from "../actions/types";

const informationReducer = (state, action) => {
  switch (action.type) {
    case SEND_INFO:
      return {
        ...state,
        info: [...state.info, action.payload]
      };
      break;
    case DELETE_INFO:
      return {
        ...state,
        info: []
      };
    default:
      return state;
  }
};

export default informationReducer;
