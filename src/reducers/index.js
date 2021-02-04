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

    case "ADD_FAVORITE":
      return {
        ...state,
        listFavoriteJob: state.listFavoriteJob.concat(action.payload),
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        listFavoriteJob: [
          ...state.listFavoriteJob.filter((job) => job.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};
