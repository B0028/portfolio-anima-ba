import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";

export default function HomeLayout() {
    return (
        <Box className="app-shell">
          <Navbar />
          <Box component="main" className="app-main">
            <Outlet />
          </Box>
        </Box>
    );
}
