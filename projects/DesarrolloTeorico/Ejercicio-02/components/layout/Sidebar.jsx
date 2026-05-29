import { Box } from "@mui/material";
import Card from "../ui/Card.jsx";

function Sidebar({ isMobile = false }) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        bgcolor: "background.default",
        borderRight: isMobile ? "none" : "1px solid",
        borderColor: "divider",
        p: 2,
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Card />
      </Box>
    </Box>
  );
}

export default Sidebar;
