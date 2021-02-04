import { initialState } from "../store";

export const favJobsReducer = (state = initialState.favs, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favList: [...state.favList.concat(action.payload)],
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favList: [...state.favList.filter((job) => job.id !== action.payload)],
      };

    default:
      return state;
  }
};
