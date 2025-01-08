import { Navigate, useLocation } from "react-router-dom";
import { _AuthApi } from "../services/auth/auth.service";

const AuthRedirect = ({ children, shouldBeLogged, allowedRoles }) => {
  const token = _AuthApi.getToken();
  const role = token ? _AuthApi.getRole() : null;
  const location = useLocation();

  if (shouldBeLogged) {
    if (!token) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(role)) {
      return <Navigate to="/unauthorized" />;
    }
  } else {
    if (token) {
      switch (role) {
        case "super_admin":
          return <Navigate to="/accounts/students" />;
        default:
          return <Navigate to="/" />;
      }
    }
  }

  return children;
};

export default AuthRedirect;
