import {
  ADD_EMAIL,
  DELETE_EMAIL,
  SELECT_EMAIL,
  UNREAD_EMAIL,
  SPAM_EMAIL,
} from "../../actions/actionTypes";
import {
  FILTER_DELETE,
  FILTER_INBOX,
  FILTER_SPAM,
} from "../../actions/filterOptions.js";

const initialState = {
  selectedEmail: undefined,
  emailList: [],
  id: 1,
};

export default function emailReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMAIL:
      let nextId = state.id;
      nextId++;
      return {
        ...state,
        emailList: [...state.emailList, { ...action.payload, id: nextId }],
        id: nextId,
      };
    case DELETE_EMAIL:
      return {
        ...state,
        emailList: state.emailList.map((email) => {
          if (email.id != action.payload) {
            return email;
          }
          return {
            ...email,
            type: FILTER_DELETE,
          };
        }),
      };
    case SELECT_EMAIL:
      return {
        ...state,
        selectedEmail: action.payload,
      };
    case UNREAD_EMAIL:
      return {
        ...state,
        emailList: state.emailList.map((email) => {
          if (email.id != action.payload) {
            return email;
          }
          return {
            ...email,
            isReaded: false,
          };
        }),
      };
    case SPAM_EMAIL:
      return {
        ...state,
        emailList: state.emailList.map((email) => {
          if (email.id != action.payload) {
            return email;
          }
          return {
            ...email,
            type: FILTER_SPAM,
          };
        }),
      };
    default:
      return state;
  }
}
