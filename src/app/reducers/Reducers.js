import {
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTER,
  CHANGE_URL,
  LOG_IN,
  LOG_OUT,
  SET_ACCESS_TOKEN,
  SET_USER_NAME,
  LOGIN_CHECK,
  SET_REFRESH_TOKEN,
  ADD_DISPLAY_FILTER,
  REMOVE_DISPLAY_FILTER
} from "../actions/Actions";
const initialState = {
  currentFilters: {
    keywords: null,
    startDate: null,
    endDate: null,
    address: null,
    type: null,
    location: null,
    price: null,
    category_name: null,
    free: null,
    notFree: null,
    minPrice: null,
    maxPrice: null,
  },
  currentDisplayFilters : [],
  currentUrl: "/mainpage",
  isLogIn: false,
  accessToken: "",
  refreshToken: "",
  userName: "user",
  userProfile: "images/Member.png",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        currentFilters: {
          ...state.currentFilters,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };
    case REMOVE_FILTER:
      return {
        ...state,
        currentFilters: {
          ...state.currentFilters,
          [action.payload]: null ,
        },
      };
      case REMOVE_DISPLAY_FILTER:
        return {
          ...state,
          currentDisplayFilters: state.currentDisplayFilters.filter(
            (filterValue) => filterValue !== action.payload
          ),
        };
        case ADD_DISPLAY_FILTER:
          return {
            ...state,
            currentDisplayFilters: [...state.currentDisplayFilters, action.payload],
          };
    case CLEAR_FILTER:
      return {
        ...state,
        currentFilters: {
          keywords: null,
          startDate: null,
          endDate: null,
          address: null,
          type: null,
          location: null,
          price: null,
          category_name: null,
          free: null,
          notFree: null,
          minPrice: null,
          maxPrice: null,
        },
        currentDisplayFilters: []
      };
    case CHANGE_URL:
      return {
        ...state,
        currentUrl: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        isLogIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogIn: false,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case LOGIN_CHECK:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
