// src/pages/PasswordCreationPage.tsx
import React, { useState } from 'react';
import { Card, TextField, Typography, Button, Box, IconButton, Stepper, Step, StepLabel } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CreatePassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    const requirements = [
      { regex: /[0-9]/, message: '1 Number' },
      { regex: /[A-Z]/, message: '1 Upper case' },
      { regex: /[a-z]/, message: '1 Lower case' },
      { regex: /[!@#$%^&*(),.?":{}|<>]/, message: '1 Special symbol' },
    ];

    const errors = requirements
      .filter(requirement => !requirement.regex.test(password))
      .map(requirement => requirement.message);

    return errors;
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(validatePassword(event.target.value).join(', '));
  };

  const handleContinue = () => {
    const errors = validatePassword(password);
    if (errors.length === 0) {
      navigate('/congratulations');
    } else {
      setPasswordError(errors.join(', '));
    }
  };

  const handleSkip = () => {
    navigate('/congratulations');
  };

  return (
    <Box
      sx={{
        padding: 2,
        maxWidth: 400,
        margin: '0 auto',
        height: '100vh',
        backgroundColor: '#f0f4f8',
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
        <Stepper activeStep={2} alternativeLabel sx={{ marginBottom: 2 }}>
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
              textAlign: 'center',
              marginBottom: 2,
              position: 'relative',
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
              Congratulations!
            </Typography>
            <Typography variant="body2" gutterBottom>
              You have successfully created your ABHA number
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginY: 2 }}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              placeholder="Create password"
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}
            />
            <Box sx={{ textAlign: 'left', paddingLeft: '16px', color: '#757575', fontSize: '14px' }}>
              <Typography variant="body2" component="div">
                <Box component="span" sx={{ display: 'block', marginBottom: '4px' }}>1 Number</Box>
                <Box component="span" sx={{ display: 'block', marginBottom: '4px' }}>1 Upper case</Box>
                <Box component="span" sx={{ display: 'block', marginBottom: '4px' }}>1 Lower case</Box>
                <Box component="span" sx={{ display: 'block', marginBottom: '4px' }}>1 Special symbol</Box>
              </Typography>
            </Box>
          </Box>
          <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2, borderRadius: '20px' }} onClick={handleContinue}>
            Continue
          </Button>
          <Button variant="outlined" color="primary" fullWidth sx={{ marginTop: 1, borderRadius: '20px' }} onClick={handleSkip}>
            Skip for now
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default CreatePassword;
