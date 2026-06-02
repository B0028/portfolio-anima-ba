import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function Navbar() {
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: "inherit",
    fontSize: "0.95rem",
    paddingBottom: "4px",
    borderBottom: `1px solid ${isActive ? "currentColor" : "transparent"}`,
  });

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 2, md: 3 },
        py: 1.5,
        bgcolor: "background.default",
        borderColor: "divider",
      }}
    >
      <Typography variant="body1" color="text.primary">
      
      </Typography>
      <Box component="nav" aria-label="Principal" sx={{ display: "flex", gap: 2.5 }}>
        <NavLink style={navLinkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyle} to="/about">
          About
        </NavLink>
        <NavLink style={navLinkStyle} to="/projects">
          Projects
        </NavLink>
        <NavLink style={navLinkStyle} to="/anima">
          Anima
        </NavLink>
        <NavLink style={navLinkStyle} to="/contact">
          Contact
        </NavLink>
      </Box>
    </Box>
  );
}

export default Navbar;
