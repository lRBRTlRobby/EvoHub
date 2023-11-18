import React from 'react'
import { Button, Grid, TextField } from "@mui/material";
import './UserRegister.css'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function EventRegister() {
    return (
        <>
            <div className="reg-container">
                <Container maxWidth="x1">
                <Grid container spacing={2} style={{ margin: "0 auto" }}>
                    <Grid item xs={6} md={6}>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div className="in-container">
                        <Link to="/"><Button sx={{display: 'flex', left: '52%', position: 'absolute' }} ><img className='back' src="/img/back.png"  /></Button></Link>
                        <br/><br/>
                            <h1 style={{ fontFamily: "'DM Sans', sans-serif" }}>Register as User</h1>
                            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "400" }}>Create your account. It's free and only takes a minute</h3>
                            <div>
                            <TextField
                                className='txt'
                                id="outlined-password-input"
                                label="First Name"
                                type="text"
                                variant='outlined'
                            /><br />
                            <TextField
                                className='txt'
                                id="outlined-password-input"
                                label="Last Name"
                                type="text"
                                variant='outlined'
                                
                            /><br />
                            <TextField
                                className='txt'
                                id="outlined-password-input"
                                label="Username"
                                type="username"
                                variant='outlined'
                            /><br />
                            <TextField
                                className='txt' 
                                id="outlined-password-input"
                                label="Email"
                                type="email"
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


                                <p className='terms' style={{ fontFamily: "'DM Sans', sans-serif" }}><input type="checkbox" />By signing up, I agree with <u>Terms and conditions.</u></p>


                            </div>
                            <Button sx={{ backgroundColor: "#800000", ":hover": { backgroundColor: "#800000" } }} variant="contained">Sign up</Button>
                        </div>
                    </Grid>
                </Grid>
                </Container>
            </div>
        </>
    );
}
