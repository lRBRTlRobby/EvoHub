import React, { useState } from 'react'
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../Components/header';
import Avatar from '@mui/material/Avatar';
import { Button, Grid } from '@mui/material';
import Footer from '../Components/footer';

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
                    <div style={{ marginTop: "3rem" }}>
                        <Avatar alt="Kyle" src="/static/images/avatar/2.jpg" sx={{ width: 120, height: 120 }} />
                    </div>
                    <Grid container spacing={2} style={{ margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
                        <Grid item xs={6} md={6}>
                            <p><b>First Name:</b> Kyle</p>
                            <p><b>Middle Name:</b> Kyle</p>
                            <p><b>Last Name:</b> Weig</p>
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

                            <p><b>Department:</b> CCS</p>
                        </Grid> 
                        <Grid item xs={6} md={6}>

                            <p><b>Email Address:</b> kyle.weig@cit.edu</p>
                            <p><b>Phone:</b> +63 912 345 6789</p>
                            <p><b>Date of Birth:</b> July 5, 2001</p>
                            <p><b>Country:</b> Philippines</p>
                        </Grid>
                        <Grid item xs={12} md={6}>


                        </Grid>
                    </Grid>
                    <div style={{ border: "1px solid black", height: "10rem", width: "100%", margin: "0 auto", borderRadius: "20px", margin: "2rem auto", padding: '1rem' }}>
                        <p>I like cats</p>
                    </div>

                </div>
            </Container>
            <Footer />
        </div>
    )
}
