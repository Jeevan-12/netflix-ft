import React, { useState } from 'react';
import { Box, Button, Typography, useScrollTrigger } from '@mui/material';
import '../assets/netflix.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utlis/firebase-config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handlesignin = async () => {
    try {
      const { email, password } = formValue;

      await createUserWithEmailAndPassword(firebaseAuth, email, password);
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
        <Typography
          style={{ fontSize: '50px', fontWeight: 'bold', lineHeight: '1' }}
        >
          Ultimate movies,TV <br />
          shows and more
        </Typography>
        <Typography
          style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1' }}
        >
          watch anywhere. cancel anytime
        </Typography>
        <Typography
          style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: '1' }}
        >
          Ready to watch? Enter your email to create or restart membership
        </Typography>
        <Box>
          <input
            type="text"
            placeholder="Email Address"
            className="signup-input-box"
            value={formValue.email}
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
          />

          {showPassword ? (
            <input
              type="password"
              placeholder="Password"
              className="signup-input-box"
              value={formValue.password}
              onChange={(e) =>
                setFormValue({ ...formValue, password: e.target.value })
              }
            />
          ) : (
            <Button
              variant="contained"
              style={{ backgroundColor: 'red' }}
              className="Get-started"
              onClick={setShowPassword(true)}
            >
              Get started
            </Button>
          )}
        </Box>
        <Button
          variant="contained"
          style={{ backgroundColor: 'red' }}
          onClick={handlesignin}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}

export default Signup;
