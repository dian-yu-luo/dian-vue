import axios from "axios";

let baseURL = "http://localhost:9000/";
if (process.env.NODE_ENV === "production") {
    baseURL = ""
}

const service = axios.create(
    {
        baseURL: baseURL
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