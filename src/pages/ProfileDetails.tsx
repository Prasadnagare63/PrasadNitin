import React, { useState } from 'react';
import { 
  Card, Typography, TextField, Button, MenuItem, Select, 
  FormControl, InputLabel, RadioGroup, FormControlLabel, Radio, 
  Alert, Stepper, Step, StepLabel 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfileDetails: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: any = {};
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!dobYear) newErrors.dobYear = 'Year is required';
    if (!dobMonth) newErrors.dobMonth = 'Month is required';
    if (!dobDay) newErrors.dobDay = 'Day is required';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
    if (!address) newErrors.address = 'Address is required';
    if (!pincode) newErrors.pincode = 'Pincode is required';
    if (!/^\d{6}$/.test(pincode)) newErrors.pincode = 'Pincode must be 6 digits';
    if (!state) newErrors.state = 'State is required';
    if (!district) newErrors.district = 'District is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setError(false);
      navigate('/user-suggestions');
    } else {
      setError(true);
    }
  };

  const inputStyle = {
    borderRadius: 8
  };

  const labelStyle = {
    color: '#1976d2',
    fontSize: 14,
    marginBottom: 5
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: '0 auto', backgroundColor: '#E9F2FF' }}>
      <Stepper activeStep={1} alternativeLabel>
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
      <Card style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Profile Details
        </Typography>
        {error && <Alert severity="error">Please correct the errors below.</Alert>}
        <div style={{ marginBottom: 20 }}>
          <Typography style={labelStyle}>Name</Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="First Name"
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={!!errors.firstName}
            helperText={errors.firstName}
            InputProps={{ style: inputStyle }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            variant="outlined"
            fullWidth
            label="Middle Name"
            style={{ flex: 1, marginRight: 5 }}
            margin="normal"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            InputProps={{ style: inputStyle }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Last Name"
            style={{ flex: 1 }}
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            InputProps={{ style: inputStyle }}
          />
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <Typography style={labelStyle}>Date of Birth</Typography>
          <div>
            <TextField
              variant="outlined"
              label="Year"
              margin="normal"
              fullWidth
              value={dobYear}
              onChange={(e) => setDobYear(e.target.value)}
              error={!!errors.dobYear}
              helperText={errors.dobYear}
              InputProps={{ style: inputStyle }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField
                variant="outlined"
                label="Day"
                margin="normal"
                value={dobDay}
                onChange={(e) => setDobDay(e.target.value)}
                style={{ flex: 1, marginRight: 5 }}
                error={!!errors.dobDay}
                helperText={errors.dobDay}
                InputProps={{ style: inputStyle }}
              />
              <TextField
                variant="outlined"
                label="Month"
                margin="normal"
                value={dobMonth}
                onChange={(e) => setDobMonth(e.target.value)}
                style={{ flex: 1 }}
                error={!!errors.dobMonth}
                helperText={errors.dobMonth}
                InputProps={{ style: inputStyle }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <Typography style={labelStyle}>Gender</Typography>
          <FormControl component="fieldset" margin="normal" fullWidth error={!!errors.gender}>
            <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {errors.gender && <Typography color="error">{errors.gender}</Typography>}
          </FormControl>
        </div>
        <div style={{ marginBottom: 20 }}>
          <Typography style={labelStyle}>Contact Details</Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Phone"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
            InputProps={{ style: inputStyle }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{ style: inputStyle }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <Typography style={labelStyle}>Address Details</Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Address"
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={!!errors.address}
            helperText={errors.address}
            InputProps={{ style: inputStyle }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Pincode"
            margin="normal"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            error={!!errors.pincode}
            helperText={errors.pincode}
            InputProps={{ style: inputStyle }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormControl fullWidth margin="normal" style={{ flex: 1, marginRight: 5 }} error={!!errors.state}>
              <InputLabel>State</InputLabel>
              <Select
                value={state}
                onChange={(e) => setState(e.target.value)}
                style={inputStyle}
              >
                <MenuItem value="State1">State1</MenuItem>
                <MenuItem value="State2">State2</MenuItem>
              </Select>
              {errors.state && <Typography color="error">{errors.state}</Typography>}
            </FormControl>
            <FormControl fullWidth margin="normal" style={{ flex: 1 }} error={!!errors.district}>
              <InputLabel>District</InputLabel>
              <Select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                style={inputStyle}
              >
                <MenuItem value="District1">District1</MenuItem>
                <MenuItem value="District2">District2</MenuItem>
              </Select>
              {errors.district && <Typography color="error">{errors.district}</Typography>}
            </FormControl>
          </div>
        </div>
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Continue
        </Button>
      </Card>
    </div>
  );
};

export default ProfileDetails;
