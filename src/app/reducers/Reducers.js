import {
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTER,
  CHANGE_URL,
  LOG_IN,
  LOG_OUT,
  SET_ACCESS_TOKEN,
} from "../actions/Actions";
const initialState = {
  currentFilters: [],
  currentUrl: "/mainpage",
  isLogIn: false,
  accessToken: "hi"
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
    case LOG_IN:
      return {
        isLogIn: true,
      };
    case LOG_OUT:
      return {
        isLogIn: false,
      };
    case SET_ACCESS_TOKEN:
      return {
        accessToken: "hi",
      };
    default:
      return state;
  }
};

export default rootReducer;
