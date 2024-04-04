import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.9:5050/",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return {};
  }
);

export default api;
