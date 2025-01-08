import { _AuthApi } from "../services/auth/auth.service";
import { _axios as Axios } from "./http-config";

// export const HttpRequestInterceptor = () => {
//   Axios.interceptors.request.use(
//     function (request) {
//       // Do something before request is sent
//       const token = _AuthApi.getToken();
//       if (request.headers) {
//         request.headers.Authorization = token ? `Bearer ${token}` : "";
//         request.headers.Accept = "application/json";
//       }

//       return request;
//     },
//     function (error) {
//       return Promise.reject(error);
//     }
//   );
// };

export const HttpRequestInterceptor = () => {
  Axios.interceptors.request.use(
    function (request) {
      const token = _AuthApi.getToken();

      if (request.headers) {
        request.headers.Authorization = token ? `Bearer ${token}` : "";
        request.headers.Accept = "application/json";

        if (request.data instanceof FormData) {
          // request.headers["Content-Type"] = "multipart/form-data"; // لا تضيفها يدويًا
        } else if (!request.headers["Content-Type"]) {
          request.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
      }

      return request;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};
