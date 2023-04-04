export const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const fetchItems = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEMS_REQUEST });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data })
      )
      .catch((error) => dispatch({ type: FETCH_ITEMS_FAILURE, error }));
  };
};
