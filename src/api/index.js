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

export const addActivity = (formData) => API.post("activity/addactivity",formData);
export const getActivity=()=>API.get("activity/type");
export const getSubtype = (type) => API.get(`activity/subtype?type=${type}`);
export const getCategory=(subtype)=>API.get(`activity/category?subtype=${subtype}`);
export const getPlaceHolder=(Category)=>API.get(`activity/placeholder?category=${Category}`);


