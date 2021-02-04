import { initialState } from "../store";

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };

    case "SINGLE_JOB":
      return {
        ...state,
        singleJob: action.payload,
      };

    default:
      return state;
  }
};
