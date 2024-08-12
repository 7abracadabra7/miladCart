import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com/posts" });

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);