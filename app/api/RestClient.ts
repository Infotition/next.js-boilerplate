import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

const getHttpHeaders = (isAuthenticated = false): AxiosRequestConfig => {
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: 'Bearer YOUR_TOKEN',
      },
    };
  }

  return {};
};

const get = (path: string): Promise<AxiosResponse> =>
  axios.get(path, getHttpHeaders());

const del = (path: string): Promise<AxiosResponse> =>
  axios.delete(path, getHttpHeaders());

const post = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(path, data, getHttpHeaders());

const put = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(path, data, getHttpHeaders());

const patch = (path: string, data: any): Promise<AxiosResponse> =>
  axios.post(path, data, getHttpHeaders());

const restClient = {
  get,
  del,
  post,
  put,
  patch,
};

export default restClient;
