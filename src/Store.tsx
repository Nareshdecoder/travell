import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import LoginReducer from "./Components/Redux/Reducer/loginReducer";
import SignUpReducer from "./Components/Redux/Reducer/signUpReducer";
import TripReducer from "./Components/Redux/Reducer/tripReducer";

const appReducer = combineReducers({
  TripReducer: TripReducer,
  LoginReducer: LoginReducer,
  SignUpReducer: SignUpReducer,
});
export const store = createStore(appReducer, applyMiddleware(ReduxThunk));
