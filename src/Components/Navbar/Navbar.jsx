import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: "12px", // Rounded corners
        overflow: "hidden",
        margin: "16px",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#880e4f", // Deep pink
          borderRadius: "12px", // Ensures consistency for the AppBar
        }}
      >
        <Toolbar>
          {/* Website Name */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#ffe4e6", // Soft pink
            }}
          >
            Makeup by Shreya
          </Typography>

          {/* Navigation Buttons */}
          <Box>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#ffe4e6",
                }}
              >
                Login
              </Link>
            </Button>

            <Button color="inherit" sx={{ textTransform: "none" }}>
              <Link
                to="/form"
                style={{
                  textDecoration: "none",
                  color: "#ffe4e6",
                }}
              >
                Form
              </Link>
            </Button>

            <Button color="inherit" sx={{ textTransform: "none" }}>
              <Link
                to="/home"
                style={{
                  textDecoration: "none",
                  color: "#ffe4e6",
                }}
              >
                Home
              </Link>
            </Button>

            <Button color="inherit" sx={{ textTransform: "none" }}>
              <Link
                to="/aboutUs"
                style={{
                  textDecoration: "none",
                  color: "#ffe4e6",
                }}
              >
                About Us
              </Link>
            </Button>

            <Button color="inherit" sx={{ textTransform: "none" }}>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "#ffe4e6",
                }}
              >
                Contact
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Navbar;
