import { useEffect, useState } from "react";
import { Box, Card as MuiCard, CardContent, CardMedia, Typography } from "@mui/material";
import narutoImg from "../../assets/images/Naruto.jpg";

function Card() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <MuiCard
      sx={{
        width: "100%",
        height: "100%",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={narutoImg}
        alt="Naruto"
      />
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          gap: 2.5,
          textAlign: "center",
        }}
      >
        <div>
          <Typography variant="h1" sx={{ mb: 1 }}>
            Naruto Uzumaki
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            "Lorem ipsum dolor sit amet,
            <br />
            aliquam velit a perferendis harum."
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 1 }}>
            Et aliquid nobis
          </Typography>
          {/*<Typography color="text.secondary">
            {new Date().toLocaleTimeString("es-UY")}
          </Typography>*/}

        </div>

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
              letterSpacing: 0.2,
            }}
          >
            {currentDate.toLocaleDateString("es-UY", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 0.6,
              color: (theme) => (theme.palette.mode === "dark" ? "#c084fc" : "#6d28d9"),
              fontWeight: 800,
            }}
          >
            {currentDate.toLocaleTimeString("es-UY")}
          </Typography>
        </Box>
      </CardContent>
    </MuiCard>
  );
}

export default Card;
