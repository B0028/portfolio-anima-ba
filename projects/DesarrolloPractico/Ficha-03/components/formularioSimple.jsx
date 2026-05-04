import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function FormularioSimple() {
  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
      >
        <TextField
          label="Nombre"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          required
        />
        <TextField
          label="Edad"
          type="number"
          value={formAge}
          onChange={(e) => setFormAge(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Box>

      {submitted && (
        <Box sx={{ mt: 2 }}>
          <Typography>Nombre: {formName}</Typography>
          <Typography>Edad: {formAge}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default FormularioSimple;
