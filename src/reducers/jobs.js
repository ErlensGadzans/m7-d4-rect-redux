import { initialState } from "../store";

export const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        list: action.payload,
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
