// MainLayout.jsx
import { Box } from "@mui/material";
import React from "react";
import ContentWrapper from "../components/styled/ContentWrapper";
import PageWrapper from "../components/styled/PageWrapper";

const MainLayout = ({ title, headerComponent, children }) => {
  return (
    <>
      <PageWrapper>
        {headerComponent && headerComponent}

        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <ContentWrapper>{children}</ContentWrapper>
        </Box>
      </PageWrapper>
    </>
  );
};

export default MainLayout;
