
import { fetchJSONByGet, fetchJSONByPost } from '../utils/fetchApi';

// 注册
export const userReigsterApi = fetchJSONByPost('api/user/register');

// 获取车主信息
export const getUserInfoApi = fetchJSONByGet('api/user/info');

// login
export const loginApi = fetchJSONByPost('api/user/login');

// get password
export const getPasswordApi = fetchJSONByGet('api/user/get/password');
