import axios from "axios";

export const SEARCH_USERS = "SEARCH_USERS";
export const SEARCH_LOADING = "SEARCH_LOADING";

export const searchUsers = (query) => async (dispatch) => {
  try {
    if (query.length < 3) return; // Minimum 3 characters for search

    dispatch({ type: SEARCH_LOADING });

    const response = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=100`);
    dispatch({ type: SEARCH_USERS, payload: response.data.items });
  } catch (error) {
    // Handle errors if any
    console.error("Error searching users:", error);
  }
};
