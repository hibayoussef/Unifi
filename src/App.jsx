import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import AppRouting from "./AppRouting";
import { HttpRequestInterceptor } from "./interceptor/http-request.interceptor";
import { HttpResponseInterceptor } from "./interceptor/http-response.interceptor";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    HttpRequestInterceptor();
    HttpResponseInterceptor(navigate);
    const handleVisibilityChange = () => {
      document.title =  "الدّر المنير";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [navigate]);

  return (
    <Box color="background.main">
      <AppRouting />
    </Box>
  );
}

export default App;
