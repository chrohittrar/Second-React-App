import React from "react";
import { Box, Typography, TextField, Button, Grid, Container } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffe4e6", // Baby pink background
        minHeight: "100vh",
        paddingY: 8,
      }}
    >
      <Container maxWidth="md">
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
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#666",
            marginBottom: 6,
          }}
        >
          We’d love to hear from you! Whether you’re looking to book an
          appointment or have any questions, feel free to reach out.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: 4,
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  color: "#880e4f",
                }}
              >
                Send Us a Message
              </Typography>
              <form>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  multiline
                  rows={4}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#880e4f",
                    "&:hover": { backgroundColor: "#aa265f" },
                    marginTop: 2,
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>

          {/* Contact Details Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  color: "#880e4f",
                }}
              >
                Get in Touch
              </Typography>

              {/* Address */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <LocationOn color="primary" sx={{ marginRight: 2 }} />
                <Typography variant="body1" sx={{ color: "#666" }}>
                  28E, Sarojini Nagar, Lucknow
                </Typography>
              </Box>

              {/* Phone */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <Phone color="primary" sx={{ marginRight: 2 }} />
                <Typography variant="body1" sx={{ color: "#666" }}>
                  +91- 7017714907
                </Typography>
              </Box>

              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Email color="primary" sx={{ marginRight: 2 }} />
                <Typography variant="body1" sx={{ color: "#666" }}>
                  shreya@makeupbyshreya.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
