import axios from 'axios';

export const Api = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});