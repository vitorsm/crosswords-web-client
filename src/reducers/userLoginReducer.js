import { FETCH_USER_LOGIN } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      // if (action.status.response !== undefined && action.status.response.state === 401) {
      if (action.status.response !== undefined) {
        var obj = {
          error: action.status.response.status,
          date: new Date()
        };

        return obj;
      }
      return action.payload || false;
    default:
      return state;
  }
}
