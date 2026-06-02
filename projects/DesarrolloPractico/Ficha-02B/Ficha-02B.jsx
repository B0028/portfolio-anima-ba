import React, { useState } from 'react';
import { 
  Container, Typography, Box, TextField, MenuItem, 
  Button, Paper, Divider, CircularProgress, Alert, Chip, Link 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PageTitle from "../../../src/components/ui/PageTitle.jsx";
import Navbar from "../../../src/components/layout/Navbar";


const API_URL = "https://portfolio-anima-ba-backend.onrender.com/api/desarrollo-practico/ficha-02"; // URL de Render

const Ficha02B = () => {
  const [metodo, setMetodo] = useState('GET');
  const [endpoint, setEndpoint] = useState('');
  const [bodyJson, setBodyJson] = useState('{\n  "nombre": "Nuevo Producto"\n}');
  const [loading, setLoading] = useState(false);
  

  const [statusHttp, setStatusHttp] = useState(null);
  const [respuestaBackend, setRespuestaBackend] = useState(null);
  const [errorApp, setErrorApp] = useState(null);

  const enviarPeticion = async () => {
    setLoading(true);
    setErrorApp(null);
    setRespuestaBackend(null);
    setStatusHttp(null);

    const configuracion = {
      method: metodo,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (metodo == 'POST') {
      try {
        configuracion.body = JSON.stringify(JSON.parse(bodyJson));
      } catch (e) {
        setErrorApp("El JSON del Body está mal formateado.");
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch(metodo == 'GET' ? API_URL : metodo == 'POST' ? `${API_URL}/productos/` : `${API_URL}/productos/${endpoint}`, configuracion);
      setStatusHttp(res.status);
      
      const datos = await res.json();
      setRespuestaBackend(datos);
    } catch (error) {
      setErrorApp("Error de conexión con el backend en Render. ¿Está el servidor encendido?");
    } finally {
      setLoading(false);
    }
  };
return (
  <>
    <Navbar></Navbar>
    <PageTitle subtext="Probando endpoints">Ficha-02 Backend</PageTitle>
    <Container maxWidth="md" sx={{ mt: 1, mb: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        API Testing
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Probando endpoints conectados directamente al backend hosteado en Render.
      </Typography>


      <Alert severity="info" sx={{ my: 2 }}>
        - Se recomienda abrir en otra pestaña el servidor Render de ejercicios para ver los cambios en: <br/> <Link href="https://portfolio-anima-ba-backend.onrender.com/api/desarrollo-practico/ficha-02" underline="hover" variant='body2' color='info'>{' portfolio-anima-ba-backend.onrender'}</Link><br/> 
        - Este cliente utiliza <strong>cookies de sesión</strong> para transferir tus datos con el servidor stateless de Render.
      </Alert>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box display="flex" sx={{ mb: 3 }}>
          <TextField
            select
            label="Método"
            value={metodo}
            onChange={(e) => setMetodo(e.target.value)}
            sx={{ width: '15%' }}
          >
            <MenuItem value="GET">GET</MenuItem>
            <MenuItem value="POST">POST</MenuItem>
            <MenuItem value="DELETE">DELETE</MenuItem>
          </TextField>

          <TextField
            label="URL de la API (Render)"
            value={metodo == 'GET' ? API_URL : metodo == 'POST' ? `${API_URL}/productos/` : `${API_URL}/productos/${endpoint}`}
            disabled
            sx={{ width: '65%' }}
          />
          
          <TextField
            label="Endpoint"
            value={endpoint}
            disabled={metodo == 'DELETE' ? false : true} 
            onChange={metodo == 'DELETE' ? (e) => setEndpoint(e.target.value) : ""}
            placeholder="/productos"
            sx={{ width: '20%' }}
          />
        </Box>


        {metodo == 'POST' && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>Request Body (JSON):</Typography>
            <pre style={{ 
              margin: 0, 
              padding: '10px', 
              background: '#272822', 
              color: '#f8f8f2', 
              borderRadius: '4px',
              overflowX: 'auto',
              fontFamily: 'monospace'
            }}>
              <TextField
                multiline
                rows={4}
                fullWidth
                value={bodyJson}
                onChange={(e) => setBodyJson(e.target.value)}
                inputProps={{ style: { fontFamily: 'monospace' } }}
              />
            </pre>
          </Box>
        )}

        <Button 
          variant="contained" 
          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
          onClick={enviarPeticion}
          disabled={loading}
          fullWidth
        >
          {loading ? 'Esperando a Render...' : 'Enviar Petición'}
        </Button>
      </Paper>

      {errorApp && <Alert severity="error" sx={{ mb: 2 }}>{errorApp}</Alert>}


      {(statusHttp || respuestaBackend || loading) && (
        <Paper elevation={3} sx={{ p: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" sx={{ mb: 1 }} >Response</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
          {statusHttp && (
            <Chip 
              label={`Status: ${statusHttp}`} 
              color={statusHttp >= 200 && statusHttp < 300 ? "success" : "error"} 
              variant="outlined" 
              sx={{ mb: 1 }} 
            />
          )}
          
          {loading ? (
            <Box display="flex" flexDirection="column" alignItems="center" my={4}>
              <CircularProgress />
              <Typography variant="body2" sx={{ mt: 2 }} color="text.secondary">
                Si es la primera petición, Render puede tardar hasta 1 minuto en despertar...
              </Typography>
            </Box>
          ) : (
            <pre style={{ 
              margin: 0, 
              padding: '10px', 
              background: '#272822', 
              color: '#f8f8f2', 
              borderRadius: '4px',
              overflowX: 'auto',
              fontFamily: 'monospace'
            }}>
              {JSON.stringify(respuestaBackend, null, 2)}
            </pre>
          )}
        </Paper>
      )}
    </Container>
  </>
  );
};


export default Ficha02B;