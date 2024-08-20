import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import pic1 from './pic1.jpg';
const Smart = () => {
  return (
    <Container    sx={{ fontFamily: 'Arial, sans-serif', paddingTop:'5rem'}}>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', mb: 4 }}>
        <img
          src={pic1 }
          alt="Wind Turbine"
          style={{ width: '100%', height: '30rem' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>
            Smart Environment
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, mt: 2 }}>
            Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per Inceptos Himen. Curabitur Tempus Una At Turpis Condimentum Lobortis.
          </Typography>
        </Box>
      </Box>

      {/* Services Section */}
      <Grid container justifyContent="center" spacing={2} sx={{ py: 4, backgroundColor: '#f3f3f3' }}>
        {[1, 2, 3, 4, 5].map((service, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
              }}
            >
              <img
                src={`path/to/icon${service}.png`}
                alt={`Service ${service}`}
                style={{ width: '50px', height: '50px' }}
              />
            </Box>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}>
              Services 0{service}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* About Section */}
      <Grid container spacing={4} sx={{ py: 4 }}>
        <Grid item xs={12} md={6} sx={{ position: 'relative', textAlign: 'center' }}>
          <img
            src="path/to/your/image.png"
            alt="Wind Turbine and Solar Panels"
            style={{ width: '100%', borderRadius: '10px', maxWidth: '400px' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              padding: '1rem',
              width: 'fit-content',
              height: 'fit-content',
            }}
          >
            <i className="fa fa-play" style={{ color: 'white', fontSize: '2rem' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mb: 2 }}>
            About Our Smart Environment services
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis. Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per Inceptos Himen. Curabitur Tempus Una At Turpis Condimentum Lobortis.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Smart;
