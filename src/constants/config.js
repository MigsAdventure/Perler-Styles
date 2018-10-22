import axios from 'axios';
const ENV = process.env.NODE_ENV;

let API_URL = 'http://localhost:8000/api/perler';

if(ENV !== 'development') {
    API_URL = 'https://still-spire-83012.herokuapp.com/api/perler';
}


const API = axios.create({
    baseURL: API_URL
});

export {
    API
}