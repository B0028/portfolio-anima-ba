import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <Typography sx={{ color: "primary.main", mb: 1.5 }}>
        Valor: {contador}
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="center">
        <Button
          type="button"
          variant="contained"
          disabled={contador === 0}
          onClick={() => setContador(contador - 1)}
          sx={{
            minWidth: "52px",
            bgcolor: "#e9d5ff",
            color: "primary.main",
            boxShadow: "none",
            "&:hover": { bgcolor: "#dcc2ff", boxShadow: "none" },
          }}
        >
          -
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={() => setContador(contador + 1)}
          sx={{ minWidth: "52px", boxShadow: "none" }}
        >
          +
        </Button>
      </Stack>
    </Box>
  );
}

export default Contador;
