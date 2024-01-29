import axios from "axios"

const api = axios.create({
    baseURL: `https://server-z2kx.onrender.com`
});

export default api