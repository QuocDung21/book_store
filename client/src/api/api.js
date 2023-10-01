import axios from "axios";
const local = "https://book-store-server-chi.vercel.app";
//https://book-store-server-chi.vercel.app/
const production = "";
const api = axios.create({
  baseURL: `${local}/api`,
  withCredentials: true,
});
export default api;
