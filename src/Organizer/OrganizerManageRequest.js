import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";
import AttendeeTable from "../Components/AttendeeTable";
import EventRibbon_noBtn from "../Components/EventRibbon_noBtn";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import "../Components/EventCatBtn.css";
import Container from '@mui/material/Container';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Input, InputLabel, Select, Typography } from "@mui/material";
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ButtonM from "../Components/ButtonMaroon";


export default function OrganizerViewAttendees(){

    return (
        <>
            {/* Buttons for View Attendees and ManageReq */}
            {/* Add your button code here */}
           
            <div >
            <img src="img/EventPageBanner.png" alt="logo" className="banner" style={{width:'1500px', height:'600px'}} />
            <br></br>
            </div>
            <Container maxWidth="1000px">
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '32px', marginRight: '600px', marginLeft: '150px' }}>2023 - Explore, Learn, Innovate!</h3>
                <p style={{ textAlign: 'justify', width: '810px', marginRight: '350px', marginLeft: '150px', fontSize: '20px', textDecoration: 'underline' }}>Cebu Institute of Technology</p>
                {/* New text added below Cebu Institute Technology */}
                <p style={{ textAlign: 'justify', width: '810px', marginRight: '350px', marginLeft: '150px', fontSize: '20px' }}>
                    TechXperience 2023 aims to inspire, educate, and connect tech enthusiasts by providing access to cutting-edge talks, hands-on workshops, and networking opportunities, both in-person and online. Explore, learn, and innovate with us!
                </p>
            </Container>
            <br></br>
            <br></br>
            <div>
                <EventRibbon_noBtn/>
            </div>
            <br></br>
            <br></br>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', width: '400px', textAlign: 'center', marginLeft: '200px' }}>
            Manage Request
            </h2>

            
            <AttendeeTable />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            
            <br></br>
            <Footer />
        </>
    )
}