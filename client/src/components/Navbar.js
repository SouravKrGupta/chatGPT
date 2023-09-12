import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p={{ xs: "1rem 6%", md: "1rem 10%" }} // Adjust padding for different screen sizes
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color="primary" fontWeight="bold">
        AI GPT3 Clone
      </Typography>
      {loggedIn ? (
        <>
          <Box
            display={{ xs: "block", md: "inline-block" }} // Adjust display for different screen sizes
            p={{ xs: "0.5rem", md: "1rem" }} // Adjust padding for different screen sizes
          >
            <NavLink to="/" p={1}>
              Home
            </NavLink>
          </Box>
          <Box
            display={{ xs: "block", md: "inline-block" }} // Adjust display for different screen sizes
            p={{ xs: "0.5rem", md: "1rem" }} // Adjust padding for different screen sizes
          >
            <NavLink to="/login" onClick={handleLogout} p={1}>
              Logout
            </NavLink>
          </Box>
        </>
      ) : (
        <>
          <Box
            display={{ xs: "block", md: "inline-block" }} // Adjust display for different screen sizes
            p={{ xs: "0.5rem", md: "1rem" }} // Adjust padding for different screen sizes
          >
            <NavLink to="/register" p={1}>
              Sign Up
            </NavLink>
          </Box>
          <Box
            display={{ xs: "block", md: "inline-block" }} // Adjust display for different screen sizes
            p={{ xs: "0.5rem", md: "1rem" }} // Adjust padding for different screen sizes
          >
            <NavLink to="/login" p={1}>
              Sign In
            </NavLink>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Navbar;
