import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import Footer from './Footer';
const newsItems = [
  {
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Quisque feugiat felis malesuada libero bibendum viverra...',
    image: '/path-to-your-images/news1.jpg'
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Quisque feugiat felis malesuada libero bibendum viverra...',
    image: '/path-to-your-images/news2.jpg'
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Quisque feugiat felis malesuada libero bibendum viverra...',
    image: '/path-to-your-images/news3.jpg'
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Quisque feugiat felis malesuada libero bibendum viverra...',
    image: '/path-to-your-images/news1.jpg'
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Quisque feugiat felis malesuada libero bibendum viverra...',
    image: '/path-to-your-images/news2.jpg'
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Quisque feugiat felis malesuada libero bibendum viverra...',
    image: '/path-to-your-images/news3.jpg'
  }
];

const News = () => {
  return (
    <Container maxWidth="xl">
    <Box sx={{ p: 4 }}>
      {/* News Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>News</Typography>
        <Grid container spacing={4}>
          {newsItems.map((news, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <img src={news.image} alt={news.title} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '16px' }} />
                <Typography variant="h6">{news.title}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>{news.description}</Typography>
                <Button variant="contained" color="primary">Read More</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
 
    </Container>
  );
}

export default News;
