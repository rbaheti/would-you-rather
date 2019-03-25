import {RECEIVE_USERS} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      console.log("got RECEIVE_USERS action.");
      return {
        ...state,
        ...action.users
      };
    default :
      return state;
  }
}
