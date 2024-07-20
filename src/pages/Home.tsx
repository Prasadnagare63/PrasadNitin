import React, { useState } from 'react';
import { Card, Typography, Button, Grid, IconButton, Container, Box } from '@mui/material';
import CreateAbha from './CreateAbha';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ScienceIcon from '@mui/icons-material/Science';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import Logo from '../logo/po.png';
import LoginImage from '../logo/Login.png';

const Home: React.FC = () => {
  const [showCreateAbha, setShowCreateAbha] = useState(false);

  const handleLoginClick = () => {
    setShowCreateAbha(true);
  };

  const cardStyle: React.CSSProperties = {
    padding: '15px',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    margin: '10px 0',
  };

  const iconButtonStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    marginBottom: '10px',
  };

  const containerStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  };

  const headerStyle: React.CSSProperties = {
    marginTop: '20px',
    marginBottom: '20px',
    color: '#333',
  };

  const loginCardStyle: React.CSSProperties = {
    ...cardStyle,
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  const serviceCardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    margin: '10px',
  };

  return (
    <Container maxWidth="sm" style={containerStyle}>
      <img src={Logo} alt="Ambula Logo" style={{ width: '150px', display: 'left', margin: '0 auto 20px auto' }} />
      {!showCreateAbha ? (
        <>
          <Typography variant="h6" gutterBottom>
            ABHA Services
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4}>
              <Card style={serviceCardStyle}>
                <IconButton color="primary" style={iconButtonStyle}>
                  <PersonAddIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Create ABHA</Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={serviceCardStyle}>
                <IconButton color="primary" style={iconButtonStyle}>
                  <HealthAndSafetyIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">My Health Records</Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={serviceCardStyle}>
                <IconButton color="primary" style={iconButtonStyle}>
                  <EventNoteIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">OPD Booking</Typography>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
            Our Services
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4}>
              <Card style={serviceCardStyle}>
                <IconButton color="primary" style={iconButtonStyle}>
                  <HomeIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Doctor Appointment</Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={serviceCardStyle}>
                <IconButton color="primary" style={iconButtonStyle}>
                  <ScienceIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Book Lab Test</Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={serviceCardStyle}>
                <IconButton color="primary" style={iconButtonStyle}>
                  <LocalHospitalIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Health Insurance</Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={serviceCardStyle}>
                <IconButton color="primary" style={iconButtonStyle}>
                  <LocalPharmacyIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Order Medicines</Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={serviceCardStyle}>
                <IconButton color="primary" style={iconButtonStyle}>
                  <HomeRepairServiceIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Book Home Care</Typography>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card style={serviceCardStyle}>
                <IconButton color="primary" style={iconButtonStyle}>
                  <LocalTaxiIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Book Ambulance</Typography>
              </Card>
            </Grid>
          </Grid>

          <Card style={loginCardStyle}>
            <Box flex="1">
              <Typography variant="h6">Login ABHA</Typography>
              <Typography variant="body2">
                Access India's digital health ecosystem with your ABHA address.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: 10 }} onClick={handleLoginClick}>
                Login now
              </Button>
            </Box>
            <img src={LoginImage} alt="Login" style={{ width: '280px', marginLeft: '10px' }} />
          </Card>
        </>
      ) : (
        <CreateAbha />
      )}
    </Container>
  );
};

export default Home;
