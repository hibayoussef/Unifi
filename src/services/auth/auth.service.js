import { _axios } from "../../interceptor/http-config";
import qs from "qs";

export const _AuthApi = {
  newAccount: async (data) => {
    return _axios.post("/website/auth/register", data).then((res) => {
      return res.data;
    });
  },

  login: async (data) => {
    return _axios.post("/website/auth/login", data).then((res) => {
      _AuthApi.storeToken(res?.data?.data?.token);
      _AuthApi.storeRole(res?.data?.data?.role);
    });
  },

  storeToken: (token) => {
    localStorage.setItem("token", token);
  },
  storeRole: (role) => {
    localStorage.setItem("role", role);
  },

  getToken: () => localStorage.getItem("token"),
  getRole: () => localStorage.getItem("role"),

  isAuthenticated: () => !!localStorage.getItem("token"),

  destroyToken: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.reload();
  },
};
