import axios from "axios";
const local = "https://book-backend-ehmv.onrender.com";
//https://book-store-server-chi.vercel.app/
const production = "";
const api = axios.create({
  baseURL: `${local}/api`,
  // withCredentials: true,
});
export default api;
