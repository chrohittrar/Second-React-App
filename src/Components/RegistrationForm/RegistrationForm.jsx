import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#ffffff",
          padding: 4,
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#880e4f",
            marginBottom: 3,
          }}
        >
          Create an Account
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#666",
            marginBottom: 4,
          }}
        >
          Sign up to explore more features and services.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            {/* Name Field */}
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Email Field */}
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Password Field */}
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Confirm Password Field */}
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                fullWidth
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              marginTop: 4,
              backgroundColor: "#880e4f",
              color: "#ffffff",
              paddingY: 1.5,
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#780c44",
              },
            }}
          >
            Register
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#666",
            marginTop: 3,
          }}
        >
          Already have an account?{" "}
          <Button
            href="/login"
            sx={{
              textTransform: "none",
              padding: 0,
              margin: 0,
              color: "#880e4f",
              textDecoration: "underline",
            }}
          >
            Log In
          </Button>
        </Typography>
      </Container>
    </Box>
  );
};

export default RegistrationForm;
