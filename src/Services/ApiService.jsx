import axios from "axios";

const ApiAccess = axios.create({
    baseURL: "http://localhost/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default ApiAccess;