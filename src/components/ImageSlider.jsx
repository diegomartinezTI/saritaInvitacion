import React from 'react';
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import sarita2 from '../assets/sarita2.png'
import sarita1 from '../assets/sarita1.png'
import quinceanera from '../assets/quinceanera.png'

const ImageSlider = () => {
  const images = [
    {
      url: sarita1,
      title: "Sarita"
    },
    {
      url: sarita2,
      title: "Sarita"
    },
    {
      url: quinceanera,
      title: "Sarita"
    }  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
  };

  return (
    <Box sx={{ width: '60%', margin: 'auto', mt: 5 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img src={image.url} alt={image.title} style={{ width: '80%', borderRadius: '10px' }} /> 
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
