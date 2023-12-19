import { ADD_FILTER, REMOVE_FILTER } from "../actions/Actions";
const initialState = {
  currentFilters: [],
};

const rootReducer = (state = initialState, action) => {
  console.log("Reduce " +action.type)
  switch (action.type) {
    case ADD_FILTER:
      console.log("current filter is "+[...state.currentFilters, action.payload]);
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
