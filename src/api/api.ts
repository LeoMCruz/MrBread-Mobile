import axios from "axios";

const api = axios.create({
    baseURL: 'https://192.168.1.3:8080'
})

export default api;