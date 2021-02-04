import { createStore, combineReducers } from "redux";
import { jobsReducer } from "../reducers/jobs";
import { favJobsReducer } from "../reducers/listFavoriteJob";

export const initialState = {
  jobs: {
    list: [],
    singleJob: {},
  },
  favoriteJobs: [],
};

const mainReducer = combineReducers({
  jobs: jobsReducer,
  favoriteJobs: favJobsReducer,
});

const configureStore = () =>
  createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default configureStore;
