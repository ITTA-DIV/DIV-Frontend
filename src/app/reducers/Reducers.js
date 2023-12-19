import { ADD_FILTER, REMOVE_FILTER,CLEAR_FILTER, CHANGE_URL } from "../actions/Actions";
const initialState = {
  currentFilters: [],
  currentUrl: "/mainpage",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        currentFilters: [...state.currentFilters, action.payload],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        currentFilters: state.currentFilters.filter(
          (filterValue) => filterValue !== action.payload
        ),
      };
    case CLEAR_FILTER:
      return {
        currentFilters: [],
      };
    case CHANGE_URL:
      return {
        currentUrl: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
