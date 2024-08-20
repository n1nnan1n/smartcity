import React , { useState }from 'react';
import { Box, Typography, Container, Button, Grid, Paper,Card,CardMedia,CardContent } from '@mui/material';
 import pic1 from './pic1.jpg';
 import DisplayImage from './Showimg.js';
 import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
 import CoronavirusIcon from '@mui/icons-material/Coronavirus';
 import FloodIcon from '@mui/icons-material/Flood';
 import MasksIcon from '@mui/icons-material/Masks';
 import TrafficIcon from '@mui/icons-material/Traffic';
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'; // นำเข้าจาก @mui/material โดยตรง
 

const Home = ({ smartItems  }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const services = ['CCTV', 'COVID-19', 'น้ำท่วม', 'PM2.5', 'จราจร'];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const imageId = "66c45a748f24f9d2603ffe2e";
  
const smart = [
  { title: 'สิ่งแวดล้อมอัจฉริยะ', subtitle: 'Smart Environment', img:  pic1 },
  { title: 'การเดินทางและขนส่งอัจฉริยะ', subtitle: 'Smart Mobility', img: pic1 },
  { title: 'การดำรงชีวิตอัจฉริยะ', subtitle: 'Smart Living', img: pic1 },
  { title: 'พลเมืองอัจฉริยะ', subtitle: 'Smart People', img: pic1 },
  { title: 'พลังงานอัจฉริยะ', subtitle: 'Smart Energy', img: pic1},
  { title: 'เศรษฐกิจอัจฉริยะ', subtitle: 'Smart Economy', img: pic1},
  { title: 'การบริหารภาครัฐอัจฉริยะ', subtitle: 'Smart Government', img: pic1 }
];
const settings = {
  // dots: true,
  // infinite: true,
  // speed: 500,
  // autoplay: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  rows: 1,
  slidesToShow: 3, // Show 3 items per slide
  slidesToScroll: 3, // Scroll 3 items per slide
  responsive: [
    {
      breakpoint: 768, // Adjust according to screen size
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

};
const newsItems = [
  {
    title: 'Our Mission',
    description: 'Lorem ipsum dolor sit amet consectetur. Pulvinar purus quis blandit vulputate natoque molestie vestibulum.',
    image: 'https://via.placeholder.com/400x200', // Add your image URL here
    buttonText: 'Read More',
  },
  {
    title: 'Vision Statement',
    description: 'Nulla facilisi. Sed feugiat, nisi in efficitur lobortis, justo nisl fringilla magna, at imperdiet enim nisl a nulla.',
    image: 'https://via.placeholder.com/400x200', // Add your image URL here
    buttonText: 'Learn More',
  },
  {
    title: 'Core Values',
    description: 'Proin dapibus neque eget sapien tincidunt, vitae lacinia turpis vehicula. Fusce eget varius libero.',
    image: 'https://via.placeholder.com/400x200', // Add your image URL here
    buttonText: 'Discover More',
  },{
    title: 'Core Values',
    description: 'Proin dapibus neque eget sapien tincidunt, vitae lacinia turpis vehicula. Fusce eget varius libero.',
    image: 'https://via.placeholder.com/400x200', // Add your image URL here
    buttonText: 'Discover More',
  },{
    title: 'Core Values',
    description: 'Proin dapibus neque eget sapien tincidunt, vitae lacinia turpis vehicula. Fusce eget varius libero.',
    image: 'https://via.placeholder.com/400x200', // Add your image URL here
    buttonText: 'Discover More',
  },
];
const shouldUseSlider =  isLargeScreen && newsItems.length > 3;
  return (
     
    <Box pt={7}>
      <Box
        sx={{
          height: '60vh',
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
      <Paper elevation={3} sx={{ textAlign: 'center', padding: '2rem', maxWidth: '800px', width: '100%' ,backgroundColor: 'rgba(192, 189, 189, 0.5)',
      backdropFilter: 'blur(5px)',
      padding: '1rem',
      borderRadius: '8px', }}>
        <Typography 
        style={{fontWeight:'bold',color:'white',fontFamily:'Noto Sans Thai'}}
          variant="h2"
          sx={{
            fontSize: {
              xs: '2.25rem',
              sm: '2.5rem',
              md: '2.75rem',
            }
          }}
        >
          Smart City
        </Typography>
        <Typography
        style={{color:'white', fontFamily:'Noto Sans Thai',textAlign:'justify',textAlignLast:'center'}}
          variant="h6"
          sx={{
            mt: 2,
            mb: 2,
            fontSize: {
              xs: '1rem',
              sm: '1.25rem',
              md: '1.5rem',
               
            }
          }}
          
        >
          Lorem ipsum dolor sit amet consectetur. Sem eros egestas tempus vestibulum nec adio nec. Risus tristique ut condimentum posuere id.
        </Typography>
        <Button variant="contained" style={{fontWeight:'bold',color:'black',backgroundColor:"whitesmoke"}}   >About Us</Button>
      </Paper>
    </Box>
   
      </Box>
 
 <div style={{ marginTop: '-7rem' }}>
 <Container>
 <Box pt={7}>
      {/* Services Section */}
      <Container >
        {isSmallScreen ? (
          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto',
              // padding: '1rem',
              marginTop: '-.5rem', // ขยับ Box ขึ้นไปด้านบน
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.palette.grey[400],
                borderRadius: '4px',
              },
            }}
          >
            {services.map(service => (
              <Box key={service} sx={{ p: 2, textAlign: 'center', flexShrink: 0, width: '200px' }}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Display icons based on the service */}
                    {service === 'CCTV' && (
                      <VideoCameraFrontIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    {service === 'COVID-19' && (
                      <CoronavirusIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    {service === 'น้ำท่วม' && (
                      <FloodIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    {service === 'PM2.5' && (
                      <MasksIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    {service === 'จราจร' && (
                      <TrafficIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: {
                          xs: '.75rem',
                          sm: '1.25rem',
                          md: '1.5rem',
                        },
                        textAlign: 'center'
                      }}
                      style={{ fontFamily: 'Noto Sans Thai' }}
                    >
                      {service}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        ) : (
          <Grid container spacing={1.75} >
            {services.map(service => (
              <Grid item xs={12} sm={4} md={2.4} key={service}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    {/* Display icons based on the service */}
                    {service === 'CCTV' && (
                      <VideoCameraFrontIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    {service === 'COVID-19' && (
                      <CoronavirusIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    {service === 'น้ำท่วม' && (
                      <FloodIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    {service === 'PM2.5' && (
                      <MasksIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    {service === 'จราจร' && (
                      <TrafficIcon sx={{ fontSize: '2.5rem', mb: 1 }} />
                    )}
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: {
                          xs: '.75rem',
                          sm: '1.25rem',
                          md: '1.5rem',
                        },
                        textAlign: 'center'
                      }}
                      style={{ fontFamily: 'Noto Sans Thai' }}
                    >
                      {service}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
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
          <Box pt={7}>
      {/* Hero Section */}
     
        

     
      {/* Smart Areas Section */}
      <Container>
        {isLargeScreen ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={9}>
              <Grid container spacing={4}>
                {smart.slice(0, 3).map((item, index) => (
                  <Grid item xs={12} sm={4} key={item.title}>
                    <Card
                      className="folder-1"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover .card-content': {
                          opacity: 1,
                          transform: 'translateY(0)',
                          transition: 'opacity 0.3s, transform 0.3s',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="400"
                        image={item.img}
                        alt={item.title}
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
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.subtitle}
                          </Typography>
                        </CardContent>
                      )}
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h4" sx={{ mb: 5, pt: 22 }} style={{ fontFamily: 'Noto Sans Thai', fontWeight: 'bold', textAlign: 'center' }}>
                มีความอัจฉริยะครบ 7 ด้าน
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                {smart.slice(3).map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={item.title}>
                    <Card
                      className="folder-1"
                      onMouseEnter={() => setHoveredIndex(index + 3)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover .card-content': {
                          opacity: 1,
                          transform: 'translateY(0)',
                          transition: 'opacity 0.3s, transform 0.3s',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="400"
                        image={item.img}
                        alt={item.title}
                      />
                      {hoveredIndex === index + 3 && (
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
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.subtitle}
                          </Typography>
                        </CardContent>
                      )}
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Slider {...settings}>
            {smart.map((item, index) => (
              <Card
                key={item.title}
                className="folder-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover .card-content': {
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: 'opacity 0.3s, transform 0.3s',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={item.img}
                  alt={item.title}
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
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                )}
              </Card>
            ))}
          </Slider>
        )}
      </Container>
    </Box>
    <Box sx={{ pb: 4,pt:4, backgroundColor: '#f5f5f5', mt: 4 }}>
      <Container>

        <Typography variant="h4" sx={{ mb: 4 }} style={{ fontFamily: 'Noto Sans Thai' }}>
          ข่าวสาร
        </Typography>
        
        <Slider {...settings}>
          {newsItems.map((news, index) => (
            <Box key={index} sx={{ px: 1, height: '400px' }}>
              <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
                <CardMedia component="img" height="200" image={news.image} alt={news.title} />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }} mt={2}>
                  <Typography   variant="h6" style={{ fontFamily: 'Noto Sans Thai' }}>{news.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 2 }} style={{ fontFamily: 'Noto Sans Thai' }}>
                    {news.description}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    {news.buttonText}
                  </Button>
                </Box>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4 }}  style={{fontWeight:'bold', fontFamily:'Noto Sans Thai'}}>Our Mission</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}  style={{  fontFamily:'Noto Sans Thai'}}>
          Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Pellentesque Amet Fusce Eu Turpis Nibh Sit Ullamcorper
          MoIestie Nibh Molestie Lectus Tristique Ultricies Duis Non Aliquet Ipsum. Neque Mauris Laoreet In Donec.
        </Typography>
        <Button variant="contained" color="primary">Read More</Button>
      </Box>
   
    </Box>
    
  );
}

export default Home;
