import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: import.meta.env.VITE_API_KEY,
  },
});
