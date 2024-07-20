// src/pages/OTPVerification.tsx
import React, { useState, useRef} from 'react';
import { Card, Typography, TextField, Button, Grid, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const OTPVerification: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [open, setOpen] = useState(false);
  const otpRefs = [useRef<HTMLInputElement>(null),useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const handleChange = (index: number, value: string) => {
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < 5) {
        otpRefs[index + 1].current?.focus();
      }
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.join('') === '123456') {
      navigate('/profile-details');
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 400, margin: '0 auto' }}>
      <IconButton component={Link} to="/create-abha" sx={{ marginBottom: 2 }}>
        <ArrowBackIcon />
      </IconButton>
      <Card sx={{ padding: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          OTP Verification
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          We have sent a 6 digit OTP to xxxxx987
        </Typography>
        <Box sx={{ textAlign: 'center', marginY: 2 }}>
          <img src="/images/mukesh.png" alt="Phone with OTP" style={{ maxWidth: '100%' }} />
        </Box>
        <Box display="flex" justifyContent="center">
        {otp.map((digit, index) => (
          <Box key={index} width="45px" marginX={0.5}>
            <TextField
              inputRef={otpRefs[index]}
              variant="outlined"
              inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
              value={digit}
              onChange={(e) =>  handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          </Box>
          ))}
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleVerify}>
          Verify and continue
        </Button>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
          <Typography variant="body2">Didn’t receive OTP?</Typography>
          <Button variant="text" color="primary">Resend OTP</Button>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <DialogContentText>Invalid OTP. Please try again.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Card>
      <Box textAlign="center" marginTop={2}>
        <Typography variant="body2">Approved & Authorized By</Typography>
        <img src="/images/todd.png" alt="National Health Authority Logo" style={{ maxWidth: '100%' }} />
      </Box>
    </Box>
  );
};

export default OTPVerification;
