import React from 'react'
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../Components/header';
import Avatar from '@mui/material/Avatar';

export default function UserProfile() {
    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <img src="./img/userprofile.jpg" alt="logo" className="banner" style={{ position: "absolute" }} />
                <div style={{display: "flex", justifyContent: "center", top}}>
                    <Avatar alt="Kyle" src="/static/images/avatar/2.jpg"
                        sx={{
                            width: 120,
                            height: 120,
                        }}
                    />
                </div>

            </div>
            <Container maxWidth="lg">

            </Container>
        </div>
    )
}
