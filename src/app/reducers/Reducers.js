import { ADD_FILTER, REMOVE_FILTER } from "../actions/Actions";
const initialState = {
  currentFilters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        currentFilters:  [...state.currentFilters, action.payload],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        currentFilters: state.currentFilters.filter(
          filterValue => filterValue !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
