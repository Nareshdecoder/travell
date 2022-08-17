import { getApi, postApi } from "../../Services/Http/Services";
import { Dispatch } from "redux";
import { Endpoint } from "../../Services/Http/Endpoint";
import axios from "axios";
import { Trips } from "../../Pages/Interface/Interface";

export const TRIP_NEW_USER_ = "TRIP_NEW_USER_";
export const TRIP_NEW_COUNTRY_ = "TRIP_NEW_COUNTRY_";
export const TRIP_NEW_PACKAGE_ = "TRIP_NEW_PACKAGE_";

export const getTripAction = () => async (dispatch: any) => {
  var config: Trips = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/reviews`,
  };

  const response = await axios(config);

  if (response) {
    dispatch({ type: TRIP_NEW_USER_, data: response });
  }
};
export const getCountryAction = () => async (dispatch: any) => {
  var config: Trips = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/country`,
  };

  const response = await axios(config);

  if (response) {
    dispatch({ type: TRIP_NEW_COUNTRY_, data: response });
  }
};
export const getPackagesAction = () => async (dispatch: any) => {
  var config: Trips = {
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/packages`,
  };

  const response = await axios(config);

  if (response) {
    dispatch({ type: TRIP_NEW_PACKAGE_, data: response });
  }
};
