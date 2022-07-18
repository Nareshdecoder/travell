import { LOGIN_NEW_USER_ } from "../Action/loginAction";

const initialState = {};

const LoginReducer = (
  state = initialState,
  action: { type: string; data: any }
) => {
  switch (action.type) {
    case LOGIN_NEW_USER_:
      return { ...state, loginResponse: action.data };

    default:
      return state;
  }
};
export default LoginReducer;
