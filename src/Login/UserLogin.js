import React from 'react'
import { Button, Grid, TextField } from "@mui/material";
import './UserLogin.css'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function EventUser() {
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
                            <Link to="/"><Button sx={{left: '52%', position: 'absolute' }} ><img className='back' src="/img/back.png"  /></Button></Link>
                            <h1 style={{ fontFamily: "'DM Sans', sans-serif" }}>Log In as User</h1>
                            <div>
                            <TextField
                                className='txt'
                                id="outlined-password-input"
                                label="Email Address"
                                type="username"
                                variant='outlined'
                            /><br />
                            <TextField
                                className='txt'
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                variant='outlined'
                            />
                            </div>
                            <div style={{ display: "flex", padding: 0, margin: "0 auto", justifyContent: "center" }}>


                            <p className='terms' style={{ fontFamily: "'DM Sans', sans-serif" }}><input type="checkbox" />By signing in, I agree with <u>Terms and conditions.</u></p>

                            </div>
                            <Link to="/EventUserHome"><Button sx={{ backgroundColor: "#800000", ":hover": { backgroundColor: "#800000" } }} variant="contained">Sign In</Button></Link>
                        </div>
                    </Grid>
                </Grid>
                </Container>
            </div>
        </>
    );
}
