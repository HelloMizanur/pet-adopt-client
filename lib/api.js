import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const endpoints = {
  me: "/auth/me",
  login: "/auth/login",
  register: "/auth/register",
  logout: "/auth/logout",
  pets: "/pets",
  petsFeatured: "/pets/featured",
  petsMine: "/pets/mine",
  pet: (id) => `/pets/${id}`,
  requests: "/requests",
  requestsMine: "/requests/mine",
  requestsForPet: (id) => `/requests/for-pet/${id}`,
  requestStatus: (id) => `/requests/${id}/status`,
  request: (id) => `/requests/${id}`,
};
