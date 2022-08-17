import { Endpoint } from "../../Services/Http/Endpoint";
import { postApis } from "../../Services/Http/Services";
export const SIGNUP_NEW_USER_ = "SIGNUP_NEW_USER_";
export const postUserSignin = (apiBody: any) => {
  return async (dispatch: any) => {
    const apiURL = Endpoint.SIGNUP;

    try {
      const response = await postApis(apiURL, apiBody);
      if (response) {
        dispatch({ type: SIGNUP_NEW_USER_, data: response });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
