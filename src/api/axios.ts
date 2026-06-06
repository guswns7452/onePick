import axios from 'axios';

export const api = axios.create({
    /*baseURL: 'http://192.168.0.15:8080',*/
    baseURL: 'http://13.209.73.31:8080',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});