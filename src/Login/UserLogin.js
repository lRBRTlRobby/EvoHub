import React, { useEffect, useState } from 'react'
import { Button, Grid, TextField } from "@mui/material";
import './UserLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useUser } from '../Components/UserProvider';

export default function EventUser() {
    const { login } = useUser(); 
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = async () => {
        if(document.getElementById("email").value != "" || document.getElementById("pass").value != "") {
            const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;
    
        try {
          const response = await axios.get('http://localhost:8080/User/getAllUsers', {
            email: document.getElementById("email").value,
            pass: document.getElementById("pass").value,
          });
    
          const users = response.data;
    
          const user = users.find(user => user.email === email && user.pass === pass);
    
          if (user) {
            // Login successful
            login(user);
            setIsLoggedIn(true);
            console.log('User logged in:', user);
          } else {
            alert('Invalid email or password');
            // Handle invalid login (show error message, etc.)
          }
        } catch (error) {
          console.error('There was a problem with the login operation:', error);
          // Handle login failure, show error message, etc.
        }
        }else{
            alert("Please enter email or password");
            return;
        }
        
      };

  

    useEffect(() => {
        // Check if registration is successful
        if (isLoggedIn) {
            // Redirect or show a success message as needed
            navigate('/EventUserHome');
        }
    }, [isLoggedIn]);
    return (
        <>
            <div className="user-container">
                <Container maxWidth="x1">
                    <Grid container spacing={2} style={{ margin: "0 auto" }}>
                        <Grid item xs={12} md={6}>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="in-container">
                                <img className='user' src="/img/user.png" />
                                <Link to="/"><Button sx={{ left: '52%', position: 'absolute' }} ><img className='back' src="/img/back.png" /></Button></Link>
                                <h1 style={{ fontFamily: "'DM Sans', sans-serif" }}>Log In as User</h1>
                                <div>
                                    <TextField
                                        className='txt'
                                        id="email"
                                        label="Email Address"
                                        type="email"
                                        variant='outlined'
                                    /><br />
                                    <TextField
                                        className='txt'
                                        id="pass"
                                        label="Password"
                                        type="password"
                                        variant='outlined'
                                    />
                                </div>
                                <div style={{ display: "flex", padding: 0, margin: "0 auto", justifyContent: "center" }}>


                                    <p className='terms' style={{ fontFamily: "'DM Sans', sans-serif" }}><input type="checkbox" />By signing in, I agree with <u>Terms and conditions.</u></p>

                                </div>
  
                                <Button sx={{ backgroundColor: "#800000", ":hover": { backgroundColor: "#800000" } }} variant="contained"
                                    onClick={handleLogIn}
                                >Sign In</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}
