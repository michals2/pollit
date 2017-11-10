import * as types from "./actionTypes";

const url = "https://jsonplaceholder.typicode.com/posts";
const url2 = "http://www.reddit.com/r/politics.json";

/**
 * @param {json} json - json string of data
 * @returns {object} - object blah blah
 */
export function receiveFeedItems(json) {
  return { type: types.RECEIVE_FEED_ITEMS, data: json };
}

/**
 * @returns {json} - json string of data
 */
export function fetchFeedItems() {
  return dispatch => {
    return fetch(url2, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        return dispatch(
          receiveFeedItems(json.data.children.map(i => i.data.title))
        );
      });
  };
}
