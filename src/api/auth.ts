import axios from "axios";
import { authActions } from "../actions/auth.actions";
import { User } from "../models/User";
import { AUTH_TOKEN, BASE_URL } from "./base";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";

  return axios.post<LoginResponse>(url, data).then((response) => {
    localStorage.setItem(AUTH_TOKEN, response.data.token);
    return response.data.user;
  });
};

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

interface MeResponse {
  data: User;
}

export const me = () => {
  const url = BASE_URL + "/me";

  return axios.get<MeResponse>(url).then((response) => response.data.data);
};

export const updateMe = () => {
  const url = BASE_URL + "/me";
  return axios
    .patch(url, { first_name: "haha" })
    .then((response) => response.data.data);
};
