import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { jobsReducer } from "../reducers/jobs";
import { favJobsReducer } from "../reducers/listFavoriteJob";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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

export default function configureStore() {
  return createStore(
    mainReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
