import axios from "axios";

const service = axios.create(
    {
        baseURL: "http://localhost:9000/"
    }
)
service.interceptors.response.use(
    res => {
        return res
    },
    error => {
        return error
    }
)
export default service;