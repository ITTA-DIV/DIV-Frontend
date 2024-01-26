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
} from "../actions/Actions";
const initialState = {
  currentFilters: {
    keywords: { title: null, value: null },
    startDate: { title: null, value: null },
    endDate: { title: null, value: null },
    address: { title: null, value: null },
    type: { title: null, value: null },
    location: { title: null, value: null },
    price: { title: null, value: null },
    category_name: { title: null, value: null },
    free: { title: null, value: null },
    notFree: { title: null, value: null },
    minPrice: { title: null, value: null },
    maxPrice: { title: null, value: null },
  },
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
          ...prevDictionary,
          [action.payload.filterType]: {
            title: action.payload.filterTitle,
            value: action.payload.filterValue,
          },
        },
      };
    case REMOVE_FILTER:
      return {
        ...state,
        currentFilters: {
          ...prevDictionary,
          [action.payload.filterType]: { title: null, value: null },
        },
      };
    case CLEAR_FILTER:
      return {
        ...state,
        currentFilters: [],
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
