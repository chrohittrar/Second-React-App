import React from "react";
import { Box, Typography, Button, Container, Grid2 } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffe4e6", // Baby pink background
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column", // Layout grows vertically
        justifyContent: "space-between", // Space between content and footer
        textAlign: "center",
      }}
    >
      {/* Main Content */}
      <Container maxWidth="md" sx={{ flex: 1 }}>
        {/* Hero Section */}
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#880e4f", // Deep pink for contrast
          }}
        >
          Glamour & Grace
        </Typography>

        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{
            color: "#880e4f",
            marginBottom: 4,
          }}
        >
          Transform your look and shine with confidence. Let your beauty bloom
          with our personalized makeup artistry.
        </Typography>

        {/* Call-to-Action Buttons */}
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 item>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#ff91a4", // Soft pink button
                color: "#fff",
                textTransform: "none",
                paddingX: 4,
                "&:hover": { backgroundColor: "#e0808f" },
              }}
            >
              Book Now
            </Button>
          </Grid2>
          <Grid2 item>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#ff91a4",
                color: "#880e4f",
                textTransform: "none",
                paddingX: 4,
                "&:hover": {
                  backgroundColor: "#ff91a4",
                  color: "#fff",
                },
              }}
            >
              Learn More
            </Button>
          </Grid2>
        </Grid2>
      </Container>

      {/* Footer Section */}
      <Box
        sx={{
          padding: 4,
          borderTop: "1px solid #ff91a4",
          backgroundColor: "#ffe4e6",
        }}
      >
        <Typography variant="body2" sx={{ color: "#880e4f" }}>
          © 2024 Glamour & Grace. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
