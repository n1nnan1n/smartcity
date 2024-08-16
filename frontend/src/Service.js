import React from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import Footer from './Footer';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import FloodIcon from '@mui/icons-material/Flood';
import MasksIcon from '@mui/icons-material/Masks';

const services = [
  { name: 'CCTV', icon: '/path-to-your-icons/cctv-icon.png' },
  { name: 'COVID-19', icon: '/path-to-your-icons/covid-icon.png' },
  { name: 'น้ำท่วม', icon: '/path-to-your-icons/flood-icon.png' },
  { name: 'PM2.5', icon: '/path-to-your-icons/pm25-icon.png' },
  { name: 'โดรน', icon: '/path-to-your-icons/drone-icon.png' },
];

const Services = () => {
  return (
    <Container maxWidth="xl">
    <Box sx={{ p: 9 }}>
      {/* Services Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Services</Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={6} md={2.4} key={index}>
              <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <img src={service.icon} alt={service.name} style={{ width: '40px', height: '40px', marginBottom: '16px' }} />
                <Typography variant="h6">{service.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
 
    </Container>
  );
}

export default Services;
