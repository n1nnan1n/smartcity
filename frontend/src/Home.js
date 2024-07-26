import React from 'react';
import { Box, Typography, Container, Button, Grid, Paper } from '@mui/material';
import Footer from './Footer';
const Home = () => {
  return (
    <Container maxWidth="xl">
    <Box>
      <Box
        sx={{
          height: '40vh',
          backgroundImage: `url('https://emudhra.com/hubfs/Imported_Blog_Media/kBxROhHT4yVGkvq4MjZa.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
        >
        <Paper elevation={3}   style={{textAlign:'center',padding:'2rem'}}>
        <Typography variant="h2">Smart City</Typography>
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          Lorem ipsum dolor sit amet consectetur. Sem eros egestas tempus
          vestibulum nec adio nec. Risus tristique ut condimentum posuere id.
        </Typography>
       
        
        <Button variant="contained" color="primary">About Us</Button>
        </Paper>
        </Box>
      </Box>

      <Box sx={{ p: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Services</Typography>
        <Grid container spacing={4}>
          {['CCTV', 'COVID-19', 'น้ำท่วม', 'PM2.5', 'โดรน'].map(service => (
            <Grid item xs={6} md={2} key={service}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6">{service}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>มีความอัจฉริยะครบ 7 ด้าน</Typography>
        <Grid container spacing={4}>
          {['Smart Environment', 'Smart Mobility', 'Smart Living', 'Smart People', 'Smart Economy', 'Smart Energy', 'Smart Governance'].map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6">{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ p: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>ข่าวสาร</Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((news, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Our Mission</Typography>
                <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                  Lorem ipsum dolor sit amet consectetur. Pulvinar purus quis
                  blandit vulputate natoque molestie vestibulum.
                </Typography>
                <Button variant="contained" color="primary">Read More</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Our Mission</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Pellentesque Amet Fusce Eu Turpis Nibh Sit Ullamcorper
          MoIestie Nibh Molestie Lectus Tristique Ultricies Duis Non Aliquet Ipsum. Neque Mauris Laoreet In Donec.
        </Typography>
        <Button variant="contained" color="primary">Read More</Button>
      </Box>
    </Box>
    <Footer />
    </Container>
  );
}

export default Home;
