export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const ADD_DISPLAY_FILTER = "ADD_DISPLAY_FILTER";
export const REMOVE_DISPLAY_FILTER = "REMOVE_DISPLAY_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const CHANGE_URL = "CHANGE_URL";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_REFRESH_TOKEN = "SET_REFRESHTOKEN_TOKEN";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export const addFilter = (filterType,filterValue) => ({
  type: ADD_FILTER,
  payload: {
    filterType: filterType,
    filterValue: filterValue
  },
});

export const removeFilter = (filterType) => ({
  type: REMOVE_FILTER,
  payload: filterType,
});

export const addDisplayFilter = (filterTitle,filterType) => ({
  type: ADD_DISPLAY_FILTER,
  payload: {filterTitle : filterTitle, filterType : filterType}
});

export const removeDisplayFilter = (filterTitle,filterType) => ({
  type: REMOVE_DISPLAY_FILTER,
  payload: {filterTitle : filterTitle, filterType : filterType}
});

export const clearFilter = (filterName) => ({
  type: CLEAR_FILTER,
  payload: filterName,
});

export const changeUrl = (url) => ({
  type: CHANGE_URL,
  payload: url,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const setAccessToken = (accessToken) => ({
  type: SET_ACCESS_TOKEN,
  payload: accessToken,
});

export const setRefreshToken = (refreshToken) => ({
  type: SET_REFRESH_TOKEN,
  payload: refreshToken,
});

export const setUserName = (userName) => ({
  type: SET_USER_NAME,
  payload: userName,
});

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  payload: userProfile,
});
