import { initialState } from "../store";

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        state.concat(action.payload), //SOMETHING WRONG
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        
          ...state.filter((job) => job.id !== action.payload),
       
      };

    default:
      return state;
  }
};
