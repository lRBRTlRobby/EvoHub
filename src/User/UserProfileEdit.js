import React, { useState } from 'react'
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../Components/header';
import Avatar from '@mui/material/Avatar';
import { Button, Grid, TextField } from '@mui/material';
import Footer from '../Components/footer';
import ButtonM from '../Components/ButtonMaroon';

export default function UserProfileEdit() {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <img src="./img/userprofile.jpg" alt="logo" className="banner" />
            </div>




            <Container maxWidth="lg" sx={{ marginBottom: "5rem" }}>
                <div>
                    <div style={{ marginTop: "3rem", display: "flex", alignItems: "center" }}>
                        <Avatar alt="Kyle" src="/static/images/avatar/2.jpg" sx={{ width: 120, height: 120 }} />
                        <Button sx={{
                            backgroundColor: 'maroon', color: 'white', fontFamily: "'DM Sans', sans-serif", width: '19rem', height: '4rem', fontWeight: 'bold', fontFamily: "'DM Sans', sans-serif", fontSize: '1rem',
                            display: "flex", justifyContent: "center", padding: 0, borderRadius: 50, marginLeft: "1rem"
                        }}>Organize an Event</Button>
                    </div>
                    <Grid container spacing={2} style={{ margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
                        <Grid item xs={6} md={6}>
                            <p><b>First Name:</b></p>
                            <TextField
                                        className='txt'
                                        id="fname"
                                        placeholder='Kyle'
                                        type="text"
                                        variant='outlined'
                                    />
                            <p><b>Middle Name:</b></p>
                            <TextField
                                        className='txt'
                                        id="fname"
                                        placeholder='Kyle'
                                        type="text"
                                        variant='outlined'
                                    />
                            <p><b>Last Name:</b></p>
                            <TextField
                                        className='txt'
                                        id="fname"
                                        placeholder='Weig'
                                        type="text"
                                        variant='outlined'
                                    />
                            <div>
                                <label>
                                    <p><b>Gender: </b>
                                        <select value={selectedGender} onChange={handleGenderChange}>
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </p>
                                </label>
                            </div>

                            <p><b>Department:</b></p>
                            <TextField
                                        className='txt'
                                        id="fname"
                                        placeholder='CCS'
                                        type="text"
                                        variant='outlined'
                                    />
                        </Grid>
                        <Grid item xs={6} md={6}>

                            <p><b>Email Address:</b></p>
                            <TextField
                                        className='txt'
                                        id="fname"
                                        placeholder='kyle.weig@cit.edu'
                                        type="text"
                                        variant='outlined'
                                    />
                                    <p><b>Phone:</b></p>
                            <TextField
                                        className='txt'
                                        id="fname"
                                        placeholder='+63 912 345 6789'
                                        type="text"
                                        variant='outlined'
                                    />
                            <p><b>Date of Birth:</b></p>
                            <TextField
                                        className='txt'
                                        id="fname"
                                        placeholder='July 5, 2001'
                                        type="text"
                                        variant='outlined'
                                    />
                                    <p><b>City:</b></p>
                            <TextField
                                        className='txt'
                                        id="fname"
                                        label="City"
                                        type="text"
                                        variant='outlined'
                                    />
                                    <p><b>Country:</b></p>
                            <TextField
                                        className='txt'
                                        id="fname"
                                        label="Country"
                                        type="text"
                                        variant='outlined'
                                    />
                        </Grid>
                        <Grid item xs={12} md={6}>


                        </Grid>
                    </Grid>
                    <div style={{ border: "1px solid black", height: "10rem", width: "100%", margin: "0 auto", borderRadius: "20px", margin: "2rem auto", padding: '1rem' }}>
                        
                        <TextField
                                        className='txt'
                                        id="fname"
                                        label="I like cats"
                                        type="text"
                                        variant='outlined'
                                        sx={{ width: "100%", maxHeight: "100%" }}
                                    />
                    </div>

                </div>
            </Container>
            <Footer />
        </div>
    )
}
