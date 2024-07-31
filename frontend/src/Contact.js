import React from 'react';
import { Box, Typography, Grid, Container, TextField, Button, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ p: 4, mt: { xs: 0, sm: 10, mb: 25 } }}>
        {/* Contact Section */}
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.610571155288!2d-122.4194189846818!3d37.77492927975852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8e0c7cf3%3A0x85a6fcf2e2c0d91b!2sSan%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1616563501037!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px', minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', height: '100%' }}>
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
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;
