import { useState } from "react";
import { Box, TextField, Button, Card, CardContent, Typography } from "@mui/material";

function Tarjeta({ titulo, descripcion }) {
  return (
    <Card sx={{ mt: 2, width: 300 }}>
      <CardContent>
        <Typography variant="h6">{titulo}</Typography>
        <Typography variant="body1">{descripcion}</Typography>
      </CardContent>
    </Card>
  );
}

function FormularioTarjeta() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tarjeta, setTarjeta] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTarjeta({ titulo, descripcion });
  };

  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
      >
        <TextField
          label="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <TextField
          label="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          multiline
          rows={3}
        />
        <Button type="submit" variant="contained">
          Crear tarjeta
        </Button>
      </Box>

      {tarjeta && <Tarjeta titulo={tarjeta.titulo} descripcion={tarjeta.descripcion} />}
    </Box>
  );
}

export default FormularioTarjeta;
