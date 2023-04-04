import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
  } from "../actions";
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ITEMS_REQUEST:
        return { ...state, loading: true };
      case FETCH_ITEMS_SUCCESS:
        return { ...state, items: action.payload, loading: false };
      case FETCH_ITEMS_FAILURE:
        return { ...state, error: action.error, loading: false };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  