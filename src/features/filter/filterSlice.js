import { CHANGE_FILTER } from "../../actionTypes/actionTypes";

const initialState = {
  filter: "inbox",
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER: {
      return { ...state, filter: action.payload };
    }
    default:
      return state;
  }
}
