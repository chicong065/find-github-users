import { SEARCH_USERS, SEARCH_LOADING } from "../actions/githubAction";

const initialState = {
  users: [],
  loading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LOADING:
      return { ...state, loading: true };
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
};

export default rootReducer;
