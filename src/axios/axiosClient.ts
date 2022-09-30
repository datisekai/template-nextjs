import axios from "axios";

const axiosClient = axios.create({
  url: process.env.BACKEND_URL,
});

export default axiosClient;
