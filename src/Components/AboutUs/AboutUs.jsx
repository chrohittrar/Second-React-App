import React from "react";
import { Box, Typography, Container, Grid, Avatar } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffe4e6", // Baby pink background
        minHeight: "100vh",
        paddingY: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Title Section */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#880e4f", // Deep pink for contrast
            marginBottom: 4,
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#666",
            marginBottom: 6,
          }}
        >
          Welcome to Makeup by Shreya, where beauty meets elegance. Our
          mission is to bring out your natural radiance and confidence through
          exquisite makeup artistry tailored just for you.
        </Typography>

        {/* Content Section */}
        <Grid container spacing={4} justifyContent="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Avatar
              src="shreya.jpg" // Replace with your image
              alt="Makeup by Shreya"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              variant="rounded"
            />
          </Grid>

          {/* Story Section */}
          <Grid item xs={12} md={10}>
            <Box
              sx={{
                backgroundColor: "#ffe4e6", // Baby pink background
                minHeight: "100vh",
                paddingY: 8,
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: "#880e4f",
                  marginBottom: 2,
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  marginBottom: 4,
                }}
              >
                Shreya, our founder and lead makeup artist, has been passionate
                about makeup since a young age. With years of experience and a
                keen eye for detail, she has mastered the art of creating looks
                that enhance natural beauty while reflecting individual style.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                }}
              >
                Whether it’s a wedding, a party, or any special occasion, 
                Makeupby Shreya is here to make your moments unforgettable. We
                specialize in bridal makeup, editorial looks, and everyday
                elegance.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
