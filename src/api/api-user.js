import { API_SERVER } from '../config/config';
import { loginedApi, notLoginedApi } from './api-base';

export const userApi = {
    login: (Data) => notLoginedApi.post(`/auth/user`, Data),
    createUser: (Data) => notLoginedApi.post(`/auth/user/new`, Data),
    isExists: (Data) => notLoginedApi.get(`/auth/user/new?userId=${Data}`),
};
