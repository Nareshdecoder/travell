import {
  TRIP_NEW_USER_,
  TRIP_NEW_COUNTRY_,
  TRIP_NEW_PACKAGE_,
} from "../Action/tripAction";

const initialState = {
  countryResponse: [],
  pakagesResponse: [],
};

const TripReducer = (
  state = initialState,
  action: { type: string; data: any }
) => {
  switch (action.type) {
    case TRIP_NEW_USER_:
      return { ...state, tripResponse: action.data };
    case TRIP_NEW_COUNTRY_:
      console.log("actiondata", action.data.data);
      return {
        ...state,
        countryResponse: action.data.data,
      };
    case TRIP_NEW_PACKAGE_:
      console.log("actiondataresponce", action.data?.data);
      return {
        ...state,
        pakagesResponse: action.data.data,
      };
    default:
      return state;
  }
};
export default TripReducer;
