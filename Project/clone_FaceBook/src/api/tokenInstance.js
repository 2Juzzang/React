import axios from 'axios';
import { getToken } from '../utills/auth';

const baseURL = process.env.REACT_APP_REMOTE_SERVER_URI;

const instance = axios.create({ baseURL });

const setToken = (config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-AUTH-TOKEN'] = `${getToken()}`;
  config.headers.withCredentials = true;
  return config;
};

instance.interceptors.request.use(setToken);

export default {
  GET: () => instance.get(`/api/post`),
  POST: (endpoint, body) => instance.post(`/api${endpoint}`, body),
  UPDATE: (endpoint, urlParam, body) =>
    instance.patch(`/api${endpoint}/${urlParam}`, body),
  DELETE: (endpoint) => instance.delete(`/api${endpoint}`),
  PATCH: (endpoint, body, header) => instance.patch(`/api${endpoint}`, body, `${header}`),
};
