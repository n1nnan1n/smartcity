import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Link, Checkbox, FormControlLabel, Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Footer from './Footer';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const apiUrl = process.env.REACT_APP_APILINK;
      console.log(apiUrl)
      const response = await axios.post(`${apiUrl}/user/register`, {
        ...formData
      });
      console.log(response.data); // Success response handling
      alert("Registration successful!");
      // You might want to redirect the user or clear the form here
    } catch (error) {
      console.error('Registration error:', error.response.data);
      alert("Registration failed: " + error.response.data.error);
    }
  };

  return (
    <Container maxWidth="xl">
      <form onSubmit={handleSubmit}>
        <Box sx={{ p: 4 }}>
          {/* Register Section */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Paper sx={{ p: 4, width: '100%', maxWidth: '500px' }}>
              <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>Register</Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>Personal Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="First Name"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Last Name"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="I have read, understand, and agree to the Privacy Policy and the Terms of Service."
                sx={{ mb: 4 }}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>Register</Button>
              <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }}>
                Already have an account? <Link href="#">Sign in</Link>
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }}>-or-</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button variant="outlined" startIcon={<GoogleIcon />} sx={{ width: '100%' }}>Sign in with Google</Button>
              </Box>
            </Paper>
          </Box>
        </Box>
        <Footer />
      </form>
    </Container>
  );
}

export default Register;
