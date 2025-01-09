import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/shared/Loader";
import ShouldNotBeLogged from "./middlewares/ShouldNotBeLogged";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ShouldBeLogged from "middlewares/ShouldBeLogged";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const AppRouting = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<ShouldNotBeLogged>{/* <Login /> */}</ShouldNotBeLogged>}
      />

      <Route path="/" element={<Navigate to="/reset-password" />} />
      <Route
        path="Dashboard/*"
        element={
          <ShouldBeLogged>
            <React.Suspense fallback={<Loader />}>
              <QueryClientProvider client={queryClient}>
                {/* <DashboardRouting /> */}
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </React.Suspense>
          </ShouldBeLogged>
        }
      />
    </Routes>
  );
};

export default AppRouting;
