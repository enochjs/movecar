
import { fetchJSONByGet, fetchJSONByPost } from '../utils/fetchApi';

// 注册
export const userReigsterApi = fetchJSONByPost('api/user/register');

// 获取车主信息
export const getUserInfoApi = fetchJSONByGet('api/user/info');

// login
export const loginApi = fetchJSONByPost('api/user/login');

// get password
export const getPasswordApi = fetchJSONByGet('api/user/get/password');

// get password
export const buyHiddenTimeApi = fetchJSONByPost('api/user/hidden/buy');

// 获取车主电话
export const getCarOwnweMobileApi = fetchJSONByPost('api/car/onwer/mobile');

// 获取我的二维码
export const getQRcodeApi = fetchJSONByPost('api/user/QRcode');
