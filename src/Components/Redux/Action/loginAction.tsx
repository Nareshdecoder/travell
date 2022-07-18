import { getApi, postApis } from "../../Services/Http/Services";
import { AnyAction, Dispatch } from "redux";
import { Endpoint } from "../../Services/Http/Endpoint";

export const LOGIN_NEW_USER_ = "LOGIN_NEW_USER_";

export const postUserLogin = (apiBody: any) => {
  return async (dispatch: any) => {
    const apiURL = Endpoint.LOGIN;

    try {
      const response = await postApis(apiURL, apiBody);
      if (response) {
        dispatch({ type: LOGIN_NEW_USER_, data: response });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
