import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: "1px solid", borderColor: "divider", bgcolor: "grey.900" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Home
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
