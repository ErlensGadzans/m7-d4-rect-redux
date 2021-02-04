import { initialState } from "../store";

export const favJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return state.concat(action.payload);

    case "REMOVE_FAVORITE":
      return state.filter((job) => job.id !== action.payload);

    default:
      return state;
  }
};
