import { useState } from "react";
import {
  Box,
  Button,
  Card as MuiCard,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const f = (x) => 2 * x + 3;

function Maquina() {
  const [valor, setValor] = useState("");
  const [ultimo, setUltimo] = useState(null);
  const [historial, setHistorial] = useState([]);

  const calcular = () => {
    const x = Number(valor);
    if (valor === "" || Number.isNaN(x)) return;

    const fx = f(x);
    setUltimo({ x, fx });
    setHistorial((prev) => [...prev, { x, fx }]);
  };

  return (
    <MuiCard
      sx={{
        width: "100%",
        maxWidth: 480,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
        borderRadius: 3,
        bgcolor: "background.paper",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 0 }}>
          Máquina de funciónes 2x +3
        </Typography>
        <Typography variant="h6" sx={{ mb: 0 }}>
          f(x) = 2x + 3
        </Typography>

        <TextField
          label="x (número)"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcular()}
          fullWidth
          size="small"
        />

        <Button variant="contained" color="primary" onClick={calcular} fullWidth>
          Calcular
        </Button>

        {ultimo !== null && (
          <Box
            sx={{
              py: 1,
              px: 1.25,
              borderRadius: 2,
              bgcolor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(192, 132, 252, 0.14)"
                  : "rgba(124, 58, 237, 0.10)",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: (theme) => (theme.palette.mode === "dark" ? "#c084fc" : "#6d28d9"),
                fontWeight: 700,
              }}
            >
              Resultado x = {ultimo.x}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 0.6,
                color: (theme) => (theme.palette.mode === "dark" ? "#c084fc" : "#6d28d9"),
                fontWeight: 800,
              }}
            >
              f(x) = {ultimo.fx}
            </Typography>
          </Box>
        )}

        {historial.length > 0 && (
          <>
            <Typography color="text.secondary" variant="body2">
              Historial
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>x</TableCell>
                    <TableCell align="right">f(x)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {historial.map((fila, i) => (
                    <TableRow key={`${fila.x}-${i}`}>
                      <TableCell>{fila.x}</TableCell>
                      <TableCell align="right">{fila.fx}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </CardContent>
    </MuiCard>
  );
}

export default Maquina;
