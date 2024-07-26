import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: 'white', textAlign: 'center', p: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={0}>
          <Typography variant="h6" sx={{ mb: 2 }}>LOGO</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>Services</Typography>
          <Typography variant="body2">CCTV</Typography>
          <Typography variant="body2">COVID-19</Typography>
          <Typography variant="body2">สำรวจน้ำท่วม</Typography>
          <Typography variant="body2">PM2.5</Typography>
          <Typography variant="body2">โดรนสำรวจ</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>About Us</Typography>
          <Typography variant="body2">โครงการคืออะไร</Typography>
          <Typography variant="body2">ทีมงานของเรา</Typography>
          <Typography variant="body2">ประโยชน์ที่ได้จากโครงการนี้</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>Contact</Typography>
          <Typography variant="body2">โทรศัพท์: +66 2033 8000</Typography>
          <Typography variant="body2">โทรสาร: +66 2033 8001</Typography>
          <Typography variant="body2">
            สำนักงานคณะกรรมการนโยบายเขตพัฒนาเศรษฐกิจพิเศษ
            ภาคตะวันออก (สกพอ.)
          </Typography>
          <Typography variant="body2">
            ชั้น 25 อาคารโทรคมนาคม บางรัก เลขที่ 72
            ซอยวัดม่วงแค ถนนเจริญกรุง แขวงบางรัก
            เขตบางรัก กรุงเทพมหานคร 10500
          </Typography>
          <Typography variant="body2">
            เวลาทำการ: จันทร์ - ศุกร์ 09:00 - 17:00 น.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ mt: 4 }}>
        Copyright © 2024 Smart City
      </Typography>
    </Box>
  );
}

export default Footer;
