import { API_SERVER } from '../config/config';
import { loginedApi, notLoginedApi } from './api-base';

export const userApi = {
    getUser: (token) =>
        loginedApi.get(`/auth/user/info`, {
            headers: {
                'X-Auth-Token': token,
            },
        }),
    login: (Data) => notLoginedApi.post(`/auth/user`, Data),
    createUser: (Data) => notLoginedApi.post(`/auth/user/new`, Data),
    isExists: (Data) => notLoginedApi.get(`/auth/user/new?userId=${Data}`),
    setting: (Data) => loginedApi.post(`/user/setting`, Data),
    getSetting: (Data) => loginedApi.get(`/user/setting?userId=${Data}`),
    getSleepData: (Data) => loginedApi.get(`/user/record?userId=${Data}`)
};
