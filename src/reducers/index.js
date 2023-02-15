import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { trailsReducer } from "./trails";
import { countyReducer } from "./counties";
import loadingReducer from "./isLoading"
import assignUsers from "./userAssignment";
import setIndividualUser from "./setIndividualUser";
import setIndividualTrail from "./setIndividualTrail";

const rootReducer = combineReducers({
  isLogged: loggedReducer,
  isLoading: loadingReducer,
  trails: trailsReducer,
  counties: countyReducer,
  users: assignUsers,
  selectedUser: setIndividualUser,
  selectedTrail: setIndividualTrail,
});

export default rootReducer;
