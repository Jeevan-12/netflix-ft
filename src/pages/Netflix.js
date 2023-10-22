import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../stores';

function Netflix() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const genersLoaded = useSelector((state) => state.netflix.genersLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  console.log(movies);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genersLoaded) dispatch(fetchMovies({ type: 'all' }));
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Box className="netflix-body">
      <Navbar isScrolled={isScrolled} />
      <Box className="netflix-play-body">
        <Box className="netflix-play" onClick={() => navigate('/palyer')}>
          <FaPlay />
          <Typography>Play</Typography>
        </Box>
        <Box className="netflix-play">
          <AiOutlineInfoCircle />
          <Typography>More Info</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Netflix;
