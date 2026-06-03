import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://13.209.73.31:8080',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
});