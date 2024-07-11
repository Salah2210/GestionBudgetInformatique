import axios from "axios";
const http=axios.create({
    baseURL:"http://localhost:8899",
    headers:{"content-type":"application/json"}
})

export default http