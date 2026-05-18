import { Box, Grid, Typography } from "@mui/material";
import Card from "../components/ui/Card";
import practicoIMG from "../assets/images/Practimg.jpg"
import teoricoIMG from "../assets/images/Teorimg.jpg"



export default function Home() {
  return (
    <Box className="content-box" p={5}>
      <Typography variant="h2" sx={{ mb: 2, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Portfolio de ejercicios Ánima
      </Typography>
      <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: 655, 
        mb: 2
        }}
      >    
        <Typography color="text.secondary">
          Desarrollo Web Full Stack
        </Typography>
        <Typography color="text.secondary">
          año: 2026
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Bruno Accorenti
      </Typography>
      <Box sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        <Card sx={{ width: '100%' }} 
        titulo={"Desarrollo Práctico"} 
        subtitulo={"Profesor: Facundo Peréz"} 
        descripcion={"React"} 
        link={"desarrollo-practico"} 
        captura={practicoIMG}>
        </Card>
        <Card sx={{ width: '100%' }} 
        titulo={"Desarrollo Teorico"} 
        subtitulo={"Profesora: Valentina Baldoni"} 
        descripcion={"React"} 
        link={"desarrollo-teorico"} 
        captura={teoricoIMG}>
        </Card>
      </Box>
      <a href="https://roadmap.sh"><img src="https://roadmap.sh/card/tall/6a0328e2a342ccbe043d79cf?variant=dark&roadmaps=%2Cfull-stack" alt="roadmap.sh"/></a>
    </Box>
  );
}

