import axios from "axios";

import { removeToSession } from "../../../Utils/SessionStorage/sessionStorage";

export const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
export const AxiosClients = axios.create({
  baseURL: process.env.REACT_APP_HOST_URL,
});

const axiosInstance = axios.create();
axios.interceptors.request.use((config: any) => {
  let tokens = JSON.parse(sessionStorage.getItem("loggedData") || "");
  console.log("authorization", tokens.token.accessToken);
  // add token to request headers

  if (sessionStorage.getItem("loggedData")) {
    config.headers["authorization"] = "Bearer " + tokens.token.accessToken;
  }

  config.headers["Content-Type"] = "application/json";
  return config;
});
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let errors = error.response;

    // return Promise.reject(error);
    if (
      errors.data.status === 401 &&
      errors.data.msg === "Re-authentication required, please login again."
    ) {
      removeToSession("loggedData");

      sessionStorage.clear();
      // navigate("/");
      window.location.reload();
    }
    return error;
  }
);
export default axiosInstance;
