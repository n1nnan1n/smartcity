import React , { useState }from 'react';
import { Box, Typography, Container, Button, Grid, Paper,Card,CardMedia,CardContent } from '@mui/material';
 import pic1 from './pic1.jpg'

const services = [
  { title: 'สิ่งแวดล้อมอัจฉริยะ', subtitle: 'Smart Environment', img:  pic1 },
  { title: 'การเดินทางและขนส่งอัจฉริยะ', subtitle: 'Smart Mobility', img: pic1 },
  { title: 'การดำรงชีวิตอัจฉริยะ', subtitle: 'Smart Living', img: pic1 },
  { title: 'พลเมืองอัจฉริยะ', subtitle: 'Smart People', img: pic1 },
  { title: 'พลังงานอัจฉริยะ', subtitle: 'Smart Energy', img: pic1},
  { title: 'เศรษฐกิจอัจฉริยะ', subtitle: 'Smart Economy', img: pic1},
  { title: 'การบริหารภาครัฐอัจฉริยะ', subtitle: 'Smart Government', img: pic1 }
];
 
 


const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
     
    <Box pt={7}>
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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '2rem' }}>
      <Paper elevation={3} sx={{ textAlign: 'center', padding: '2rem', maxWidth: '600px', width: '100%' }}>
        <Typography 
        style={{fontWeight:'bold'}}
          variant="h2"
          sx={{
            fontSize: {
              xs: '1rem',
              sm: '1.5rem',
              md: '1.75rem',
            }
          }}
        >
          Smart City
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            mb: 2,
            fontSize: {
              xs: '.75rem',
              sm: '1.25rem',
              md: '1.5rem',
               
            }
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Sem eros egestas tempus vestibulum nec adio nec. Risus tristique ut condimentum posuere id.
        </Typography>
        <Button variant="contained" color="primary">About Us</Button>
      </Paper>
    </Box>
   
      </Box>
 
 <div style={{ marginTop: '-3rem' }}>
      <Container>
        <Grid container spacing={1.75} >
          {['CCTV', 'COVID-19', 'น้ำท่วม', 'PM2.5', 'โดรน'].map(service => (
            <Grid item xs={2.5} sm={4} md={2.4} className='menu' key={service}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography
                  style={{ fontWeight: 'bold', textAlign: 'center' }}
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: '.75rem',
                      sm: '1.25rem',
                      md: '1.5rem',
                    }
                  }}
                >
                  {service}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
      

      {/* <Box sx={{ p: 4 , backgroundColor: '#1F4569'}}>
      <Container>
        <Typography variant="h4" sx={{ mb: 4,textAlign:'center',color:'white',fontweight:'bold'}}>มีความอัจฉริยะครบ 7 ด้าน</Typography>
        <Grid container spacing={4}>
          {['Smart Environment', 'Smart Mobility', 'Smart Living', 'Smart People', 'Smart Economy', 'Smart Energy', 'Smart Governance'].map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6">{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        </Container>
      </Box> */}
       <Box sx={{ p: 4 }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 4 }}>มีความอัจฉริยะครบ 7 ด้าน</Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <Card
                className='folder-1'
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover .card-content': {
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: 'opacity 0.3s, transform 0.3s',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={service.img}
                  alt={service.title}
                />
                {hoveredIndex === index && (
                  <CardContent
                    className="card-content"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(221, 221, 221, 0.5)',
                      backdropFilter: 'blur(5px)',
                      opacity: 0,
                      transform: 'translateY(100%)',
                      transition: 'opacity 0.3s, transform 0.5s',
                    }}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.subtitle}
                    </Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
      
     
      <Box sx={{ p: 4, backgroundColor: '#f5f5f5' }}> <Container>
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
        </Grid>   </Container>
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
    
  );
}

export default Home;
