import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/shared/Loader";
import AuthRedirect from "./middlewares/AuthRedirect";
import Home from "./pages/home";

// import Login from "./pages/auth/pages/Login";
// import Register from "./pages/registerForms/pages/register";
// import {
//     CreateAccount
// } from "../src/routes/route";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route
        path="/login"
        element={
          <AuthRedirect shouldBeLogged={false}>
            <Login />
          </AuthRedirect>
        }
      />
      <Route path="/new-account" element={<CreateAccount />} />
      <Route path="/register" element={<Register />} /> */}

      {/* Admin */}
      <Route
        path="/*"
        element={
          <AuthRedirect
            shouldBeLogged={true}
            allowedRoles={["super_admin", "admin"]}
          >
            <React.Suspense fallback={<Loader />}>
              {/* <DashboardRouting /> */}
              <ReactQueryDevtools initialIsOpen={false} />
            </React.Suspense>
          </AuthRedirect>
        }
      />
    </Routes>
  );
};

export default AppRouting;
