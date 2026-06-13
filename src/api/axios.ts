import axios from 'axios';
import CookieManager from '../utils/cookieManager';

export const api = axios.create({
    baseURL: 'http://13.209.73.31:8080',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// ✅ 요청 인터셉터 — SessionID 자동 추가
api.interceptors.request.use(async (config) => {
    const cookies = await CookieManager.getAll();
    const jsessionid = cookies['JSESSIONID']?.value;
    if (jsessionid) {
        config.headers['SessionID'] = jsessionid;
    }
    return config;
});