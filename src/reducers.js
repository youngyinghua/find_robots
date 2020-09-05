import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

const initialStateSearch = {
  searchfield: "",
};
export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchfield: action.payload };
    default:
      return state;
  }
};

const initialStateRequest = {
  robots: [],
  pending: false,
  error: "",
};
export const requestRobots = (state = initialStateRequest, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, pending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, pending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};
