import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  return action.type === FETCH_USER ? action.payload || false : state;
}
