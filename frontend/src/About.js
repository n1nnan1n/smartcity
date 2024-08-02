import React from 'react';
import { Box, Typography, Grid, Paper, Container, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import './App.css'
const About = () => {
  const imageItems = [1, 2, 3, 4];

  return (
    <Container>
      {/* About Us Section */}
      <Box sx={{ my: 6, pt: { xs: 3, sm: 3, md: 4, lg: 7 } ,borderBottom: '3px solid #000',}} >
        <Grid container spacing={2}>
          {/* ฝั่งข้อความ */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                mt: { xs: 0, sm: 10 ,mb:25 },  // ปรับ margin-top ตามขนาดหน้าจอ
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: {
                  xs: '1.5rem',  // ขนาดตัวอักษรสำหรับหน้าจอเล็ก
                  sm: '2rem',    // ขนาดตัวอักษรสำหรับหน้าจอเล็กกลาง
                  md: '2.5rem',  // ขนาดตัวอักษรสำหรับหน้าจอกลาง
                  lg: '3rem'     // ขนาดตัวอักษรสำหรับหน้าจอใหญ่
                }
              }}style={{ fontFamily: 'Noto Sans Thai' }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: {
                  xs: '0.875rem',  // ขนาดตัวอักษรสำหรับหน้าจอเล็ก
                  sm: '1rem',      // ขนาดตัวอักษรสำหรับหน้าจอเล็กกลาง
                  md: '1.125rem',  // ขนาดตัวอักษรสำหรับหน้าจอกลาง
                  lg: '1.25rem'    // ขนาดตัวอักษรสำหรับหน้าจอใหญ่
                }
              }}style={{textAlign:'justify',fontFamily: 'Noto Sans Thai' }}
              
            >
              Lorem ipsum dolor sit amet consectetur. Et aliquam diam velit tellus condimentum sodales.
              Sed imperdiet ultricies nec lorem ac ut. Etiam fermentum in venenatis scelerisque ac in pharetra malesuada.
              Arcu massa id interdum et semper gravida.
            </Typography>
          </Grid>
          
          {/* ฝั่งภาพ */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {imageItems.slice(0, 2).map((_, index) => (
                    <Grid item xs={6} key={index}>
                      <img
                        src={pic1}
                        alt={`Image ${index + 1}`} // เพิ่ม alt attribute เพื่อความเข้ากันได้กับ SEO
                        style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} // เพิ่ม objectFit เพื่อให้ภาพไม่บิดเบี้ยว
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {imageItems.slice(2).map((_, index) => (
                    <Grid item xs={6} key={index}>
                      <img
                        src={pic1}
                        alt={`Image ${index + 3}`} // เพิ่ม alt attribute เพื่อความเข้ากันได้กับ SEO
                        style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} // เพิ่ม objectFit เพื่อให้ภาพไม่บิดเบี้ยว
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* เราทำอะไรบ้าง Section */}
      <Box sx={{ textAlign: 'center', my: 6 ,borderBottom: '3px solid #000',pb: { xs: 3, sm: 3, md: 4, lg: 7 } }}>
        <Typography variant="h4" sx={{ mb: 2 }} style={{ fontFamily: 'Noto Sans Thai' }}>เราทำอะไรบ้าง</Typography>
        <Typography className='detail-text' sx={{ mb: 4 }}  variant="body1" style={{textAlign:'justify',textAlign:'center', fontFamily: 'Noto Sans Thai' }}>
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
                  <img src={pic2} style={{ width: '100%', borderRadius: '8px' }} />
                  <Typography variant="body1" sx={{ mt: 2 }} style={{ fontFamily: 'Noto Sans Thai' }}>
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
      <Box sx={{ my: 6 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h4"
            sx={{ mb: 2, textAlign: 'center', fontFamily: 'Noto Sans Thai' }}
          >
            แผนที่
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              textAlignLast: 'center',
              fontFamily: 'Noto Sans Thai',
              textAlign: 'justify',
            }}
          >
            Lorem Ipsum Dolor Sit Amet Consectetur. Sit Imperdiet Mauris Lacus Ipsum Enim Placerat.
            Massa Volutpat Neque Elit Enim. Nulla Luctus Egestas Enimnulla Risus. Diam Et Parturient Enim Neque Eget Varius.
          </Typography>
        </Grid>
        {/* Map Section */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.610571155288!2d-122.4194189846818!3d37.77492927975852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f8e0c7cf3%3A0x85a6fcf2e2c0d91b!2sSan%20Francisco%2C%20CA%2094110!5e0!3m2!1sen!2sus!4v1616563501037!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default About;
