import axios from "axios";

export const BASE_URL = "https://api-dev.domecompass.com";

export const AUTH_TOKEN = "auth_token";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (!token) {
    return config;
  }

  return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
  console.log("error is", error);
  if (error.response?.data?.code === 9101) {
    localStorage.removeItem(AUTH_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});
