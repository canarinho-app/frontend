import axios from 'axios';
import { getToken } from "./Auth";

export const Api = axios.create({
    baseURL: 'http://localhost:3001/'
});

