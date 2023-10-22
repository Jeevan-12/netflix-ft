import React, { useState } from 'react';
import { Box, Button, Typography, useScrollTrigger } from '@mui/material';
import '../assets/netflix.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utlis/firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const { email, password } = formValue;

      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log('err', error);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate('/');
  });
  return (
    <Box className="signup-body">
      <Header />
      <Box className="signup-content">
        <input
          type="text"
          placeholder="Email Address"
          className="signup-input-box"
          value={formValue.email}
          onChange={(e) =>
            setFormValue({ ...formValue, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="signup-input-box"
          value={formValue.password}
          onChange={(e) =>
            setFormValue({ ...formValue, password: e.target.value })
          }
        />

        <Button
          variant="contained"
          style={{ backgroundColor: 'red' }}
          className="Get-started"
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* <Button
          variant="contained"
          style={{ backgroundColor: 'red' }}
          onClick={handlesignin}
        >
          Sign up
        </Button> */}
      </Box>
    </Box>
  );
}

export default Login;
