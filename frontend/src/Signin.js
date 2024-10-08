import React from 'react';
import { Box, Typography, Container, TextField, Button, Grid, Link, Checkbox, FormControlLabel, Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
const SignIn = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // คุณสามารถเก็บ token และเรียกใช้ API ตามที่ต้องการ
  };

  const handleLoginFailure = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ p: 4, mt: { xs: 0, sm: 10, mb: 25 } }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <GoogleLogin
                clientId="176530666181-n4k3q23104370qt4epd16eag0h036u58.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={handleLoginSuccess}
                onFailure={handleLoginFailure}
                redirectUri="http://localhost:3000/auth/callback"
                cookiePolicy={'single_host_origin'}
                style={{ width: '100%' }}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;
