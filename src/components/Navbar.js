import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import '../assets/netflix.css';
import logo from '../image/netflix-logo.jpg';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../utlis/firebase-config';

function Navbar() {
  const navigate = useNavigate();
  const homePage = () => {
    navigate('/home');
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate('/login');
  });
  return (
    <Box className="navbar">
      {/* left */}
      <Box className="navbar-left">
        <img src={logo} alt="logo" className="logo-img" />
        <Typography onClick={homePage}>Home</Typography>
        <Typography onClick={homePage}>TV shows</Typography>
        <Typography onClick={homePage}>Movies</Typography>
        <Typography onClick={homePage}>My List</Typography>
      </Box>
      {/* right */}
      <Box className="navbar-right ">
        <Box className="navbar-right-left ">
          <AiOutlineSearch className="search " />
          <input type="text" placeholder="Search" />
        </Box>
        <BiLogOut
          className="logout "
          onClick={() => {
            signOut(firebaseAuth);
          }}
        />
      </Box>
    </Box>
  );
}

export default Navbar;
