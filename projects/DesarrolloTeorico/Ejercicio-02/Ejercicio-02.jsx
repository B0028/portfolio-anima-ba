import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  Drawer,
  Fab,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Maquina from "./components/Maquina.jsx";
import "./Ejercicio-02.css";

function Ejercicio01() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className="app-shell">
      <Navbar />

      {isMobile && (
        <Fab
          color="primary"
          size="small"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          sx={{
            position: "fixed",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1300,
          }}
        >
          {isSidebarOpen ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </Fab>
      )}

      <Box component="main" className="app-main">
        <Box className="content-box">
          <Typography variant="h2" sx={{ mb: 2, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Main
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repellendus commodi reiciendis fugit ex nesciunt eveniet suscipit eum quae soluta possimus debitis quibusdam corrupti voluptatem doloremque, expedita culpa nulla quam?
          </Typography>
          <Maquina />
        </Box>
        {isMobile ? (
          <Drawer
            anchor="right"
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            PaperProps={{ sx: { width: 320 } }}
          >
            <Sidebar isMobile />
          </Drawer>
        ) : (
          <Box className="sidebar-box">
            <Sidebar />
          </Box>
        )}
          
      </Box>

      <Footer />
    </Box>
  );
}

export default Ejercicio01;
