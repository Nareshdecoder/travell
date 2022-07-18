import { AxiosClient, AxiosClients } from "./AxiosClient";

export const getApi = async (url: any, headers: any) => {
  let response;
  await AxiosClient.get(url, headers)
    .then((res) => (response = res))
    .catch((err) => (response = err));
  return response;
};
export const postApi = async (url: any, data: any) => {
  let response: any;
  await AxiosClient.post(url, data)
    .then((res) => (response = res))
    .catch((err) => (response = err));
  return response?.data;
};
export const postApis = async (url: any, data: any) => {
  let response: any;
  await AxiosClients.post(url, data)
    .then((res) => (response = res))
    .catch((err) => (response = err));
  return response?.data;
};
export const postApiWithToken = async (url: any, data: any) => {
  let response: any;
  const headers: any = {
    headers: {
      Authorization: "JWT ",
    },
  };

  await AxiosClient.post(url, data, headers)
    .then((res) => (response = res))
    .catch((err) => (response = err.response));
  return response.data;
};
export const putApi = async (url: any, data: any) => {
  let response: any;
  await AxiosClient.put(url, data)
    .then((res) => (response = res))
    .catch((err) => (response = err));
  return response.data;
};
export const deleteApi = async (url: any, data: any) => {
  let response: any;
  const headers: any = {
    headers: {
      Authorization: "JWT ",
    },
  };

  await AxiosClient.delete(url, headers)
    .then((res) => (response = res))
    .catch((err) => (response = err.response));
  return response.data;
};
