// src/components/CongratulationsPage.tsx
import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { keyframes } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Congratulations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        animation: `${fadeInUp} 0.5s ease-out`,
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <IconButton
        component={Link}
        to="/"
        sx={{ alignSelf: 'flex-start', marginBottom: 2 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Card
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 3,
          boxShadow: 3,
          animation: `${fadeInUp} 0.5s ease-out`,
        }}
      >
        <CardContent>
          <Box
            sx={{
              background: 'linear-gradient(to bottom, #bbdefb 0%, #ffffff 60%)',
              padding: 2,
              borderRadius: '8px 8px 0 0',
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#1976d2' }}>
              🎉 Congratulations!
            </Typography>
            <Typography variant="body1" sx={{ color: '#616161' }}>
              You have successfully created your ABHA number.
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              sx={{
                paddingX: 5,
                paddingY: 1.5,
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
                borderRadius: '20px',
              }}
            >
              Go to Home
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Congratulations;
