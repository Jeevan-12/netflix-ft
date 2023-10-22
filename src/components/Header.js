import { Box, Button } from '@mui/material';
import React from 'react';
import logo from '../image/netflix-logo.jpg';
import '../assets/netflix.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <Box className="header-body">
      <img src={logo} alt="logo" className="header-logo" />
      <Button
        variant="contained"
        style={{ backgroundColor: 'red' }}
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </Button>
    </Box>
  );
}

export default Header;
