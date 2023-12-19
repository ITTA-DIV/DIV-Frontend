export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CHANGE_URL = "CHANGE_URL";

export const addFilter = (filterName) => ({
  type: ADD_FILTER,
  payload: filterName,
});

export const removeFilter = (filterName) => ({
  type: REMOVE_FILTER,
  payload: filterName,
});

export const changeUrl = (url) => ({
  type: CHANGE_URL,
  payload: url,
});
