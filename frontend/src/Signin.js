import React from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Link, Checkbox, FormControlLabel, Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Footer from './Footer';

const SignIn = () => {
  return (
    <Container maxWidth="xl">
    <Box sx={{ p: 4 }}>
      {/* Sign-in Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
        <Paper sx={{ p: 4, width: '100%', maxWidth: '400px' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>Sign in</Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            type="email"
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Password"
            type="password"
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember Me"
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <Link href="#" variant="body2">Forgot Password?</Link>
          </Box>
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>Sign In</Button>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }}>
            Not created an account? <Link href="#">Register</Link>
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

export default SignIn;
