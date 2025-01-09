import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { pdfjs } from "react-pdf";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { ThemeProviderWraper } from "./theme/providers/ThemeProvider";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback="Loading...">
      <QueryClientProvider client={queryClient}>
        <ThemeProviderWraper>
          <ToastContainer />
          <App />
        </ThemeProviderWraper>
        <ReactQueryDevtools initialIsOpen={false} />{" "}
      </QueryClientProvider>
    </Suspense>
  </BrowserRouter>
);
