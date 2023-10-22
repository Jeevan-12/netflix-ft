import React from 'react';
import bc from '../image/background.jpg';
import { Box } from '@mui/material';

function Background() {
  return (
    <Box>
      <img src={bc} alt="background" />
    </Box>
  );
}

export default Background;
