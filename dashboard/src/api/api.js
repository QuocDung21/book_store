import axios from "axios";
const api = axios.create({
  baseURL: "https://book-backend-ehmv.onrender.com/api",
});


export default api;
