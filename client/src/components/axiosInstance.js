import axios from "./node_modules/axios"
const instance = axios.create({
    baseURL: "http://localhost:3001/api/"
})
export default instance 