import React from 'react';
import { Box, Typography, Grid, Paper, Container, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from './Footer';

const About = () => {
  return (
    <Container maxWidth="xl">
      {/* About Us Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>About us</Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Lorem ipsum dolor sit amet consectetur. Et aliquam diam velit tellus condimentum sodales.
          Sed imperdiet ultricies nec lorem ac ut. Etiam fermentum in venenatis scelerisque ac in pharetra malesuada.
          Arcu massa id interdum et semper gravida.
        </Typography>
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map((img, index) => (
            <Grid item xs={6} md={3} key={index}>
              <img src={`/path-to-your-image/img${img}.jpg`} alt={`img${img}`} style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* เราทำอะไรบ้าง Section */}
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>เราทำอะไรบ้าง</Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Lorem ipsum dolor sit amet consectetur. Gravida suspendisse vel sit purus euismod odio purus turpis purus.
        </Typography>
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ position: 'absolute', left: 0 }}>
            <ArrowBackIosIcon />
          </IconButton>
          <Grid container spacing={2} sx={{ overflow: 'hidden', flexWrap: 'nowrap' }}>
            {[1, 2, 3, 4].map((img, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Paper sx={{ p: 2 }}>
                  <img src={`/path-to-your-image/img${img}.jpg`} alt={`img${img}`} style={{ width: '100%', borderRadius: '8px' }} />
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    Lorem Ipsum Dolor Sit Amet Consectetur.
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <IconButton sx={{ position: 'absolute', right: 0 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Map Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 6 }}>
        <img src="/path-to-your-image/map.png" alt="map" style={{ width: '50%', borderRadius: '8px' }} />
        <Box sx={{ width: '45%' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>แผนที่</Typography>
          <Typography variant="body1">
            Lorem Ipsum Dolor Sit Amet Consectetur. Sit Imperdiet Mauris Lacus Ipsum Enim Placerat.
            Massa Volutpat Neque Elit Enim. Nulla Luctus Egestas Enimnulla Risus. Diam Et Parturient Enim Neque Eget Varius.
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Container>
  );
}

export default About;
