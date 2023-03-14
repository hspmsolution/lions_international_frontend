import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// const API = axios.create({ baseURL: process.env.REACT_APP_API });


API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const addActivity = (formData) => API.post("/addactivity",formData);
export const getActivity=()=>API.get("/type");
export const getSubtype=()=>API.get("/subtype");
export const getCategory=()=>API.get("/category");
export const getPlaceholder=()=>API.get("/placeholder")


