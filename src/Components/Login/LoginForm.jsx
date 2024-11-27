import React, { useReducer } from "react";
import { Box, Container, Typography, TextField, Button, Link } from "@mui/material";

const initState = {
  emailid: "",
  pwd: "",
  errorMssg: {
    emailerr: "",
    pwderr: "",
  },
  formValid: false,
  emailValid: false,
  pwdValid: false,
};

const reducer = (state, action) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "VALIDATE_EMAIL":
      const emailValid = emailPattern.test(state.emailid);
      return {
        ...state,
        emailValid,
        errorMssg: {
          ...state.errorMssg,
          emailerr: emailValid ? "" : "Invalid E-mail",
        },
      };

    case "VALIDATE_PASSWORD":
      const pwdValid = state.pwd.length >= 5;
      return {
        ...state,
        pwdValid,
        errorMssg: {
          ...state.errorMssg,
          pwderr: pwdValid ? "" : "Password should be more than 5 characters",
        },
      };

    case "VALIDATE_FORM":
      return {
        ...state,
        formValid: state.emailValid && state.pwdValid,
      };

    default:
      return state;
  }
};

const LoginForm = () => {
  const [state, dispatcher] = useReducer(reducer, initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatcher({ type: "SET_FIELD", field: name, value });

    // Trigger validation
    if (name === "emailid") {
      dispatcher({ type: "VALIDATE_EMAIL" });
    }
    if (name === "pwd") {
      dispatcher({ type: "VALIDATE_PASSWORD" });
    }

    // Validate the entire form
    dispatcher({ type: "VALIDATE_FORM" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.formValid) {
      console.log("Form Submitted Successfully:", {
        email: state.emailid,
        password: state.pwd,
      });
    } else {
      console.log("Form Invalid:", state.errorMssg);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9", // Light background
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: "#fff", // White card
          padding: 4,
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            textAlign: "center",
            marginBottom: 4,
          }}
        >
          Please sign in to your account
        </Typography>

        {/* Login Form */}
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextField
            name="emailid"
            label="Email"
            value={state.emailid}
            type="email"
            fullWidth
            required
            variant="outlined"
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
            error={!!state.errorMssg.emailerr}
            helperText={state.errorMssg.emailerr}
          />
          <TextField
            name="pwd"
            label="Password"
            type="password"
            value={state.pwd}
            fullWidth
            required
            variant="outlined"
            sx={{ marginBottom: 3 }}
            onChange={handleChange}
            error={!!state.errorMssg.pwderr}
            helperText={state.errorMssg.pwderr}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#880e4f",
              color: "#fff",
              paddingY: 1.5,
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#780c44",
              },
            }}
            disabled={!state.formValid}
          >
            Sign In
          </Button>
        </Box>

        {/* Footer Links */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#666",
            marginTop: 3,
          }}
        >
          Don't have an account?{" "}
          <Link href='/signUp' sx={{ color: "#880e4f", textDecoration: "none" }}>
            Sign Up
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default LoginForm;
