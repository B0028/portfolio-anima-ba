import { Fab } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function BackButton({ to = -2, texto = "Volver" }) {

    const navigate = useNavigate();
        const navigateBack = () => {
            navigate(to); 
    };

    return (
        <Fab
        color="primary"
        size="small"
        onClick={navigateBack}
        sx={{
          position: "fixed",
          left: 25,
          top: "10%",
          transform: "translateY(-50%)",
          zIndex: 1300,
        }}
        >
            <ArrowBackIosNewIcon />
        </Fab>
    )
}

export default BackButton;