import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";

import "../Components/EventCatBtn.css";
import Container from '@mui/material/Container';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Input, InputLabel, Select, Typography } from "@mui/material";
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';

export default function UserEventJoinRequest() {
  const [formData, setFormData] = useState({
    fullName: "",

    schoolEmailAddress: "",
    yearLevel: "",
    department: "",
    proofOfPayment: null, // Change to null for file input
    additionalFile: null, // Change to null for file input
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // If it's a file input, use files[0], else use the value
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your server
    console.log(formData); // Replace with actual form submission logic
  };

  return (
    <>
      <ResponsiveAppBar />
      <img src="img/EventJoinRequestHeroBanner.png" alt="logo" className="banner" />
      <img src="img/TechXperience.png" alt="logo" style={{ marginTop: '50px', marginLeft: '300px', marginRight: '50px', width: '600px', height: '150px' }} />
      <Container maxWidth="sm">
      <br/>
      <br/>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            
          <FormControl fullWidth>
            <InputLabel htmlFor="fullName">Full Name</InputLabel>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
            />
        <br/>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="schoolEmailAddress">School Email Address</InputLabel>
            <Input
              id="schoolEmailAddress"
              name="schoolEmailAddress"
              type="email"
              value={formData.schoolEmailAddress}
              onChange={handleChange}
            />
          </FormControl>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <FormControl fullWidth>
            <FormLabel>Year Level</FormLabel>
            <Select
              id="yearLevel"
              name="yearLevel"
              value={formData.yearLevel}
              onChange={handleChange}
            >
              <MenuItem value="1">1st Year</MenuItem>
              <MenuItem value="2">2nd Year</MenuItem>
              <MenuItem value="3">3rd Year</MenuItem>
              <MenuItem value="4">4th Year</MenuItem>
            </Select>
          </FormControl>

          <br></br>
          <br></br>

          <FormControl fullWidth>
            <FormLabel>Department</FormLabel>
            <Select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <MenuItem value="CCS">College of Computer Science</MenuItem>
              <MenuItem value="CEA">College of Civil Engineering</MenuItem>
              <MenuItem value="CCJ">College of Criminal Justice</MenuItem>
              <MenuItem value="CASE">College of Arts, Sciences and Education</MenuItem>
              <MenuItem value="CEA">College of Nursing and Allied Health</MenuItem>
              
            </Select>
          </FormControl>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel style={{alignText:'center', marginLeft:'150px' ,marginRight:'100px'}}>Please provide  proof of payment</FormLabel>
                <Input
                  id="proofOfPayment"
                  name="proofOfPayment"
                  type="file"
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
 
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 2 }}>
            <Button type="submit" variant="contained" style={{backgroundColor:'#800000',color:'white', marginLeft:'120px',marginRight:'100px'}}>
              Submit
            </Button>
          </Box>
        </form>
      </Container>
      <Footer />
    </>
  );
}