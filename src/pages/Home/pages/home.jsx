import { Box } from "@mui/material";
import MainLayout from "../../../layout/MainLayout.jsx";

const Home = () => {
  return (
    <>
      <MainLayout
      // description={data?.data?.contents[0]?.description}
      // homeImage={data?.data?.contents[0]?.images[0]}
      >
        <Box
          sx={{
            padding: {
              xs: "5px",
              sm: "10px",
            },
          }}
        >
          <Box id="about-us">
            من نحن
            {/* <AboutUs data={data} /> */}
          </Box>
        </Box>
      </MainLayout>

      {/* <Box
        id="footer"
        sx={{ paddingTop: "4rem", textAlign: "center", margin: 0 }}
      >
        <Footer />
      </Box> */}
    </>
  );
};

export default Home;
