import React from 'react'
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../Components/header';
import Avatar from '@mui/material/Avatar';
import { Button, Grid } from '@mui/material';

export default function UserProfile() {
    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <img src="./img/userprofile.jpg" alt="logo" className="banner" style={{ position: "absolute", zIndex: -1 }} />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ marginTop: "8.6rem" }}>
                        <Avatar alt="Kyle" src="/static/images/avatar/2.jpg" sx={{ width: 120, height: 120 }} />
                        <div>

                        </div>

                    </div>

                </div>
                <div style={{marginTop: "1rem", textAlign: "center", marginTop: "-1.5rem", fontFamily: "'DM Sans', sans-serif" }}>
                    <h2 style={{ fontSize: "2.8rem" }} >Kyle Weig</h2>
                    <p style={{ fontSize: "1.2rem", marginTop: "-1.8rem" }}>CEBU CITY</p>
                </div>
                <div style={{marginTop: "1rem", textAlign: "right", marginTop: "7.4rem", marginRight: "9.5rem", fontFamily: "'DM Sans', sans-serif"}}>
                    <Button sx={{color: 'black'}}><p style={{fontSize: ".9rem"}}><u>Edit Profile</u></p></Button>
                </div>

            </div>
            <Container maxWidth="lg">
                <div>
                    <p><b>First Name:</b> Kyle</p>
                    <p><b>Middle Name:</b> Kyle</p>
                    <p><b>Last Name:</b> Weig</p>
                    <p><b>Department:</b> CCS</p>
                    <p><b>First Name:</b> Kyle</p>
                </div>
            </Container>
        </div>
    )
}
