import {
  ADD_EMAIL,
  DELETE_EMAIL,
  SELECT_EMAIL,
  UNREAD_EMAIL,
  SPAM_EMAIL,
  INBOX_EMAIL,
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
      let selectedEmail;
      let emailList = state.emailList.map((email) => {
        if (email.id != action.payload) {
          return email;
        }
        selectedEmail = email;
        return {
          ...email,
          type: FILTER_DELETE,
        };
      });
      let selectedEmailIndex = state.emailList.findIndex(
        (email) => email.id == action.payload
      );
      return {
        ...state,
        emailList: emailList,
        selectedEmail: emailList[selectedEmailIndex],
      };
    case SELECT_EMAIL: {
      let selectedEmailIndex = state.emailList.findIndex(
        (email) => email.id == action.payload.id
      );

      return {
        ...state,
        selectedEmail: state.emailList[selectedEmailIndex],
      };
    }
    case UNREAD_EMAIL: {
      let selectedEmail;
      let emailList = state.emailList.map((email) => {
        if (email.id != action.payload) {
          return email;
        }
        selectedEmail = email;
        return {
          ...email,
          isReaded: false,
        };
      });
      let selectedEmailIndex = state.emailList.findIndex(
        (email) => email.id == action.payload
      );
      return {
        ...state,
        emailList: emailList,
        selectedEmail: emailList[selectedEmailIndex],
      };
    }
    case SPAM_EMAIL: {
      let selectedEmail;
      let emailList = state.emailList.map((email) => {
        if (email.id != action.payload) {
          return email;
        }
        selectedEmail = email;
        return {
          ...email,
          type: FILTER_SPAM,
        };
      });
      let selectedEmailIndex = state.emailList.findIndex(
        (email) => email.id == action.payload
      );
      return {
        ...state,
        emailList: emailList,
        selectedEmail: emailList[selectedEmailIndex],
      };
    }
    case INBOX_EMAIL: {
      let selectedEmail;
      let emailList = state.emailList.map((email) => {
        if (email.id != action.payload) {
          return email;
        }
        selectedEmail = email;
        return {
          ...email,
          type: FILTER_INBOX,
        };
      });
      let selectedEmailIndex = state.emailList.findIndex(
        (email) => email.id == action.payload
      );
      return {
        ...state,
        emailList: emailList,
        selectedEmail: emailList[selectedEmailIndex],
      };
    }
    default:
      return state;
  }
}
