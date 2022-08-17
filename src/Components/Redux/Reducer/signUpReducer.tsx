import { SIGNUP_NEW_USER_ } from "../Action/signUpaction";

const initialState = {};

const SignUpReducer = (
  state = initialState,
  action: { type: string; data: any }
) => {
  switch (action.type) {
    case SIGNUP_NEW_USER_:
      return { ...state, signUpResponse: action.data };

    default:
      return state;
  }
};
export default SignUpReducer;
