import axios from "axios";

const api = axios.create({
  baseURL: "https://course-api.com/react-useReducer-cart-project",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
