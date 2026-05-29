import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "grey.900",
        py: 2,
      }}
    >
      <Typography variant="body2" align="center">
        © 2026. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
