import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://free-nba.p.rapidapi.com',
});

Api.interceptors.request.use(async config => {
    config.headers.Accept = 'application/json';
    config.headers.Authorization = ``;
    config.headers = { 'x-rapidapi-key' : 'd4b0009135msh45430eb885cb799p1bf555jsn20616abc92b5' };
    return config;
});

export default Api;