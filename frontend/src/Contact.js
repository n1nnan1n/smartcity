import React from 'react';
import { Box, Typography, Grid , Container , TextField, Button, Paper } from '@mui/material';
import Footer from './Footer';
const Contact = () => {
  return (
    <Container maxWidth="xl">
    <Box sx={{ p: 4 }}>
      {/* Contact Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
        <Box sx={{ width: '50%', mr: 4 }}>
          <img src="/path-to-your-image/map.png" alt="map" style={{ width: '100%', borderRadius: '8px' }} />
        </Box>
        <Paper sx={{ width: '45%', p: 4, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}>
          <Typography variant="h4" sx={{ mb: 4 }}>CONTACT</Typography>
          <TextField
            variant="outlined"
            fullWidth
            label="Name"
            sx={{ mb: 2, backgroundColor: 'white', borderRadius: '4px' }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            sx={{ mb: 2, backgroundColor: 'white', borderRadius: '4px' }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Phone number"
            sx={{ mb: 2, backgroundColor: 'white', borderRadius: '4px' }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Message"
            multiline
            rows={4}
            sx={{ mb: 4, backgroundColor: 'white', borderRadius: '4px' }}
          />
          <Button variant="contained" color="primary" fullWidth>
            SEND
          </Button>
        </Paper>
      </Box>
    </Box>
    <Footer />
    </Container>
  );
}

export default Contact;
