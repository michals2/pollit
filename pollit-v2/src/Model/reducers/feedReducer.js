import initialState from "./../store/initialState";
// strings of the actions
import { FETCH_FEED_ITEMS, RECEIVE_FEED_ITEMS } from "../actions/actionTypes";

export default (state = initialState.feedItems, action) => {
  let newState;

  switch (action.type) {
    case FETCH_FEED_ITEMS:
      return action;

    case RECEIVE_FEED_ITEMS:
      newState = action.data;
      return newState;

    default:
      return state;
  }
};
