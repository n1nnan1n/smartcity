import React from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Link, Checkbox, FormControlLabel, Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Footer from './Footer';

const Register = () => {
  return (
    <Container maxWidth="xl">
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
                type="text"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Last Name"
                type="text"
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
                type="email"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Phone"
                type="text"
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
                type="password"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Confirm Password"
                type="password"
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="I have read, understand, and agree to the Privacy Policy and the Terms of Service."
            sx={{ mb: 4 }}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>Register</Button>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }}>
            Already have an account? <Link href="#">Sign in</Link>
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }}>-or-</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="outlined" startIcon={<GoogleIcon />} sx={{ width: '100%' }}>Sign in with Google</Button>
            <Button variant="outlined" startIcon={<FacebookIcon />} sx={{ width: '100%' }}>Sign in with Facebook</Button>
          </Box>
        </Paper>
      </Box>
    </Box>
    <Footer />
    </Container>
  );
}

export default Register;
