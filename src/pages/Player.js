import { Box } from '@mui/material';
import React from 'react';
import vedioPlay from '../image/Stranger.mp4';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
function Player() {
  const navigate = useNavigate();
  return (
    <Box style={{ backgroundColor: 'black' }}>
      <BiArrowBack
        style={{ color: 'white', fontSize: '30px' }}
        onClick={() => navigate(-1)}
      />
      <video width="100%" height="710px" autoPlay loop controls muted>
        <source src={vedioPlay} type="video/mp4" />
      </video>
    </Box>
  );
}

export default Player;
