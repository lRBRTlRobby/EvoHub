import React, { useState } from 'react';
import { useParams  } from 'react-router-dom';
import axios from 'axios';
import { 
  Box, 
  Button, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  Grid, 
  Input, 
  InputLabel, 
  Select, 
  Typography 
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";
import "../Components/EventCatBtn.css";
import Container from '@mui/material/Container';
import { useUser } from '../Components/UserProvider';

export default function UserEventJoinRequest() {
  const { user } = useUser();
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    schoolEmailAddress: "",
    yearLevel: "",
    department: "",
    proofOfPayment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/participantrequest/insertParRequest', {
        firstname: user.fname,
        lastname: user.lname,
        email: user.email,
        yearlevel: formData.yearLevel,
        department: formData.department,
        eventId: eventId,
        userId: user.userid,
      });

      window.alert('Request Successfully Requested to the organizer');

      // Reload the page
      window.location.reload();
      

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
console.log("USER ID",user.userid);
  return (
    <>
      <ResponsiveAppBar />
       {/* Menu For Participants Here */}
      
      <img src="/img/EventJoinRequestHeroBanner.png" alt="logo" className="banner" />
      <img src="/img/TechXperience.png" alt="logo" style={{ marginTop: '50px', marginLeft: '300px', marginRight: '50px', width: '600px', height: '150px' }} />
      <Container maxWidth="sm">
        <br/>
        <br/>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <FormControl fullWidth >
              <InputLabel htmlFor="fname">First Name</InputLabel>
              <Input
                id="fname"
                name="fname"
                type="text"
                value={user.fname}
                onChange={handleChange}
                disabled
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="lname">Last Name</InputLabel>
              <Input
                id="lname"
                name="lname"
                type="text"
                value={user.lname}
                onChange={handleChange}
                disabled
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="schoolEmailAddress">School Email Address</InputLabel>
              <Input
                id="schoolEmailAddress"
                name="schoolEmailAddress"
                type="email"
                value={user.email}
                onChange={handleChange}
                disabled
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
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

            <FormControl fullWidth sx={{ mt: 2 }}>
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
                <FormLabel style={{ textAlign: 'center', marginLeft: '150px', marginRight: '100px' }}>
                  Please provide proof of payment
                </FormLabel>
                <Input
                  id="proofOfPayment"
                  name="proofOfPayment"
                  type="file"
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            
            <Box sx={{ marginTop: 2 }}>
              <Button type="submit" variant="contained" style={{ backgroundColor: '#800000', color: 'white', marginLeft: '120px', marginRight: '100px' }}>
                Submit
              </Button>
            </Box>
          </Grid>
        </form>
      </Container>
      <Footer />
    </>
  );
}
