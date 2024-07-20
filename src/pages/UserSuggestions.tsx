import React, { useState } from 'react';
import { Card, TextField, Typography, Button, Box, Alert, Stepper, Step, StepLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
const UserSuggestion: React.FC = () => {
  const [abhaAddress, setAbhaAddress] = useState('jsdahj23');
  const [suggestions] = useState(['Dgra3414', 'Dgra3414']);
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSelectSuggestion = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
  };

  const handleContinue = () => {
    if (selectedSuggestion) {
      navigate('/create-password');
    }
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 400, margin: '0 auto', backgroundColor: '#E9F2FF', height: '100vh', position: 'relative' }}>
      <Box sx={{ backgroundColor: '#E9F2FF', height: '30vh', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, position: 'absolute', top: 0, left: 0, right: 0 }}></Box>
      <Stepper activeStep={2} alternativeLabel sx={{ zIndex: 1, position: 'relative' }}>
        <Step key="Phone Number">
          <StepLabel>Phone Number</StepLabel>
        </Step>
        <Step key="Personal Details">
          <StepLabel>Personal Details</StepLabel>
        </Step>
        <Step key="ABHA Profile">
          <StepLabel>ABHA Profile</StepLabel>
        </Step>
      </Stepper>
      <Card sx={{ padding: 3, marginTop: 4, backgroundColor: '#FFFFFF', borderRadius: 4, zIndex: 1, position: 'relative' }}>
        <Typography variant="h5" align="left" gutterBottom sx={{ color: '#1976d2' }}>
          Congratulations!
        </Typography>
        <Typography variant="body2" align="left" gutterBottom sx={{ color: '#000000' }}>
          You have successfully created your ABHA number
        </Typography>
        <Box sx={{ textAlign: 'center', marginY: 2 }}>
          <Typography variant="h6" sx={{ color: '#000000' }}>Create your ABHA address</Typography>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            value={abhaAddress}
            disabled
            sx={{ backgroundColor: '#F5F5F5', borderRadius: 1 }}
            InputProps={{
              endAdornment: <Typography>@abdm</Typography>,
            }}
          />
          <Typography variant="body2" sx={{ color: 'green' }}>
            This ABHA address is available
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', marginY: 2 }}>
          <Typography variant="body2" sx={{ color: '#000000' }}>Suggestions</Typography>
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{
                margin: 1,
                borderColor: selectedSuggestion === suggestion ? 'primary.main' : 'grey.500',
                color: selectedSuggestion === suggestion ? 'primary.main' : 'grey.500',
                backgroundColor: selectedSuggestion === suggestion ? '#E9F2FF' : 'transparent',
              }}
              onClick={() => handleSelectSuggestion(suggestion)}
              startIcon={selectedSuggestion === suggestion ? <CheckIcon /> : null}
            >
              {suggestion}
            </Button>
          ))}
        </Box>
        {selectedSuggestion && (
          <Alert severity="success">You selected: {selectedSuggestion}</Alert>
        )}
      </Card>
      <Box sx={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
        <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: 2 }} onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default UserSuggestion;
