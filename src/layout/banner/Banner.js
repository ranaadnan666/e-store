import React from 'react';
import { Box } from '@mui/material';

const Banner = (props) => {
  return (
    <Box
      sx={{
        height: 300,
        backgroundImage: 'url(https://avada.website/handmade/wp-content/uploads/sites/152/2020/12/bg5.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'Black',
        fontSize: '2rem',
        fontWeight: 'bold',
      
      }}
    >
     {props.title}
    </Box>
  );
};

export default Banner;