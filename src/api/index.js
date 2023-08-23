import axios from "axios";

const ROOT_URL = window.location.href;
export let API_URL;
export let superadmin_url;

if (ROOT_URL.includes(".up.railway.app")) {
  API_URL = "https://lionsinternationalbackend-production.up.railway.app/api";
  superadmin_url = "https://lions-superadmin.up.railway.app/";
} else if (ROOT_URL.includes("lionsdistrict317f.org")) {
  API_URL = "https://lionsdistrict317f.org/api";
  superadmin_url = "https://lionsdistrict317f.org/superadmin";
} else if (ROOT_URL.includes("lions317f.org")) {
  API_URL = "https://lions317f.org/api";
  superadmin_url = "https://lions317f.org/superadmin";
} else if (ROOT_URL.includes("lions317b.org")) {
  API_URL = "https://lions317b.org/api";
  superadmin_url = "https://lions317b.org/superadmin";
} else {
  // Default to local development URL
  API_URL = "http://localhost:5000/api";
  superadmin_url = "http://localhost:5000/superadmin";
}

const API = axios.create({ baseURL: API_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("profile")}`;
  }
  return req;
});
export const signIn = (formData) => API.post("auth/login", formData);
export const resetPass = (formData, resetToken) =>
  resetToken
    ? API.post(`auth/resetpass?resetToken=${resetToken}`, formData)
    : API.post("auth/resetpass", formData);
export const forgetPassword = (formData) =>
  API.post("auth/forget-password", formData);
export const addActivity = (formData) =>
  API.post("activity/addactivity", formData);
export const editActivity = (formData) => API.post("activity/update", formData);
export const getActivity = () => API.get("activity/type");
export const getClubDirector = () => API.get("activity/clubdirectors");
export const getSubtype = (type) => API.get(`activity/subtype?type=${type}`);
export const getCategory = (subtype,type) =>
  API.get(`activity/category?subtype=${subtype}&type=${type}`);
export const getPlaceHolder = (category,type,subType) =>
  API.get(`activity/placeholder?category=${category} &type=${type}&subtype=${subType}`);
export const getReportedActivity = (clubId) =>
  clubId
    ? API.get(`activity/reportedactivity?clubId=${clubId}`)
    : API.get("activity/reportedactivity");
export const deleteActivity = (activityId) =>
  API.delete(`activity/deleteactivity?activityId=${activityId}`);
export const getAdminReports = (month) =>
  API.get(`adminreporting/reports?month=${month}`);
export const getPoints = () => API.get("adminreporting/points");
export const addReport = (data) => API.post("adminreporting/addreport", data);
export const clubsReporting = (clubId) => API.get(`adminreporting/clubsreporting?clubId=${clubId}`);
export const updateMember = (formData) =>
  API.post("member/updateprofile", formData);
export const memberProfile = () => API.get("member/profile");
export const getReportedNews = () => API.get("news/reportedNews");
export const deleteReportedNews = (id) =>
  API.delete(`news/deletenews?id=${id}`);
export const newsReporting = (formData) =>
  API.post("news/newsReporting", formData);
export const getClubMembers = () => API.get("member/clubmembers");
export const getAllmembers = (clubid) =>
  API.get(`member/allmembers?clubid=${clubid}`);
export const getZone = () => API.get("clubs/zone");
export const getRegion = () => API.get("clubs/region");
export const regionActivity = () => API.get("activity/region/allactivities");
export const zoneActivity = () => API.get("activity/zone/allactivities");
export const expense = (formData) => API.post("expenses", formData);
export const clubStatement = () => API.get("expenses/statement");
export const activityStats = () => API.get("activity/stats");
export const events = (newPage) => API.get(`activity/events?page=${newPage}`);
export const topClubs = () => API.get("adminreporting/topclubs");
export const slider = () => API.get("assets/slider");
export const registerActivity = (formData) =>
  API.post("activity/register", formData);
export const gallery = () => API.get("assets/gallery");
export const memberDirectory = (page, searchQuery) =>
  API.get(`member/memberDirectory?page=${page}&search=${searchQuery}`);
export const buisnessDirectory = () => API.get("member/buisnessDirectory");
export const topNews = (newPage) => API.get(`news/topNews?page=${newPage}`);
export const allClubs = () => API.get("clubs/allclubs");
export const titles = () => API.get("clubs/titles");
export const downloadMemberData = (selectedData) =>
  API.post("clubs/download-member-data", selectedData);
export const districtData = () => API.get("clubs/districtdata");
export const downloadResources = () => API.get("assets/downloadResources");
