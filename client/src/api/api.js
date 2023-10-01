import axios from "axios";
const local = "https://book-store-backend-ten.vercel.app";
const production = "";
const api = axios.create({
  baseURL: `${local}/api`,
  withCredentials: true,
});
export default api;
