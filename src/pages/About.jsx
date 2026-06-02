import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 2,
            bgcolor: 'text.primary',
            mb: 4,
            animation: 'shimmer 2s infinite ease-in-out',
            '@keyframes shimmer': {
              '0%': { width: 10, opacity: 0.3 },
              '50%': { width: 50, opacity: 1 },
              '100%': { width: 10, opacity: 0.3 },
            },
          }}
        />

        <Typography
          variant="h4"
          component="h1"
          fontWeight={300}
          sx={{
            letterSpacing: 2,
            mb: 1,
            textTransform: 'uppercase',
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          Sección en construcción
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          fontWeight={300}
          sx={{ letterSpacing: 0.5, opacity: 0.8 }}
        >

        </Typography>
      </Box>
    </Container>
  );
}