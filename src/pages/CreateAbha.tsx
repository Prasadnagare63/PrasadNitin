import React, { useState } from 'react';
import { Card, Typography, TextField, Button, Checkbox, FormControlLabel, IconButton, Box, Stepper, Step, StepLabel, InputAdornment } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { setPhoneNumber } from '../redux/slices/userSlice';

const CreateAbha: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumberState] = useState('');
  const [aadhaarNumber, setAadhaarNumberState] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  const [step, setStep] = useState(0);

  const handleContinue = () => {
    if (selectedTab === 1) {
      if (/^\d{10}$/.test(phoneNumber) && termsAccepted) {
        dispatch(setPhoneNumber(phoneNumber));
        navigate('/otp-verification');
      } else {
        alert('Please enter a valid 10-digit phone number and accept the terms and conditions.');
      }
    } else {
      // Handle Aadhaar number case here
      if (/^\d{12}$/.test(aadhaarNumber) && termsAccepted) {
        // Dispatch Aadhaar number and navigate to the next step
        // dispatch(setAadhaarNumber(aadhaarNumber)); // Add this action to your Redux slice
        navigate('/otp-verification');
      } else {
        alert('Please enter a valid 12-digit Aadhaar number and accept the terms and conditions.');
      }
    }
  };

  return (
    <Box
      sx={{
        padding: 2,
        maxWidth: 400,
        margin: '0 auto',
        height: '100vh',
        backgroundColor: '#e7f0fd', // Light blue background color
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <IconButton component={Link} to="/" sx={{ marginBottom: 2, alignSelf: 'flex-start' }}>
        <ArrowBackIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1 }}>
        <Stepper activeStep={step} alternativeLabel sx={{ marginBottom: 2 }}>
          <Step key="Phone number">
            <StepLabel>Phone number</StepLabel>
          </Step>
          <Step key="Personal Details">
            <StepLabel>Personal Details</StepLabel>
          </Step>
          <Step key="ABHA Profile">
            <StepLabel>ABHA Profile</StepLabel>
          </Step>
        </Stepper>
        <Card sx={{ padding: 3, boxShadow: 3, borderRadius: '8px' }}>
          <Box
            sx={{
              background: 'linear-gradient(to bottom, #bbdefb 0%, #ffffff 60%)',
              padding: 2,
              borderRadius: '8px 8px 0 0',
              textAlign: 'left',
              marginBottom: 2,
              position: 'relative',
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
              Welcome!
            </Typography>
            <Typography variant="body2" gutterBottom>
              You are about to create your ABHA number
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url(/path/to/blue-drops-image.png) no-repeat center center',
                backgroundSize: 'cover',
                opacity: 0.1,
                borderRadius: '8px 8px 0 0',
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
            <Button
              onClick={() => setSelectedTab(0)}
              sx={{
                flex: 1,
                borderRadius: 0,
                textTransform: 'capitalize',
                color: selectedTab === 0 ? '#1976d2' : '#000',
                borderBottom: selectedTab === 0 ? '2px solid #1976d2' : '2px solid transparent',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                }
              }}
            >
              Aadhaar
            </Button>
            <Button
              onClick={() => setSelectedTab(1)}
              sx={{
                flex: 1,
                borderRadius: 0,
                textTransform: 'capitalize',
                color: selectedTab === 1 ? '#1976d2' : '#000',
                borderBottom: selectedTab === 1 ? '2px solid #1976d2' : '2px solid transparent',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                }
              }}
            >
              Phone
            </Button>
          </Box>
          {selectedTab === 1 ? (
            <TextField
              variant="outlined"
              fullWidth
              label="Phone"
              placeholder="98xxxxxxxx"
              margin="normal"
              value={phoneNumber}
              onChange={(e) => setPhoneNumberState(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                },
              }}
            />
          ) : (
            <TextField
              variant="outlined"
              fullWidth
              label="Aadhaar"
              placeholder="12-digit Aadhaar number"
              margin="normal"
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumberState(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                },
              }}
            />
          )}
          <Typography variant="body2" color="error" gutterBottom>
            You'll have to complete KYC verification later to get ABHA number
          </Typography>
          <Button variant="contained" color="primary" fullWidth onClick={handleContinue} sx={{ borderRadius: '20px' }}>
            Continue
          </Button>
          <Typography variant="body2" align="center" sx={{ marginY: 2 }}>
            Already have ABHA Number? <Link to="/login">Click here</Link>
          </Typography>
        </Card>
      </Box>
      <Box sx={{ textAlign: 'center', padding: 2 }}>
        <FormControlLabel
          control={<Checkbox checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} color="primary" />}
          label={
            <Typography variant="body2">
              Accept <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
            </Typography>
          }
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0, // Positioning the wave image at the top
          left: 0,
          right: 0,
          height: '150px', // Adjust height as needed
          background: 'url(/images/1235) no-repeat center center',
          backgroundSize: 'cover',
        }}
      />
    </Box>
  );
};

export default CreateAbha;
