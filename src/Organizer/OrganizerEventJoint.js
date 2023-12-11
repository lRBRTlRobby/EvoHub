import React, { useRef, useEffect, useState } from 'react'
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
import ResponsiveAppBarOrgan from '../Components/organHeader';


export default function OrganEventJoinRequest() {
  const { user } = useUser();
  const [event, setEvents] = useState({});
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    schoolEmailAddress: "",
    yearlevel: "",
    department: "",
    proofOfPayment: null,
  });

  useEffect(() => {
    window.scroll(0, 0);
        axios.get(`http://localhost:8080/Event/getEvent/${eventId}`)
      .then(response => {
        console.log(response.data)
        setEvents(response.data);

       
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, [eventId]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Fetch event details to check year level and department conditions
    const eventResponse = await axios.get(`http://localhost:8080/Event/getEvent/${eventId}`);
    const event = eventResponse.data;

    // Check if both year level and department are allowed
    if (
      // (event.yearlevel === 0 || event.yearlevel === formData.yearlevel) 
      // &&
      (event.department === formData.department)
    ) {
      const response = await axios.post('http://localhost:8080/participantrequest/insertParRequest', {
        firstname: user.fname,
        lastname: user.lname,
        email: user.email,
        yearlevel: formData.yearlevel,
        department: formData.department,
        eventId: eventId,
        userId: user.userid,
      });

      window.alert('Request Successfully Requested to the organizer');

      // Reload the page
      window.location.reload();
    } else {
      window.alert('Your year level or department is not allowed for this event.');
    }

  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

console.log("Here PLEASE:", event.yearlevel,formData.yearlevel,event.department,formData.department)
console.log("USER ID",user.userid);
  return (
    <>
      <ResponsiveAppBarOrgan />
       {/* Menu For Participants Here */}
      
      <img src="/img/EventJoinRequestHeroBanner.png" alt="logo" className="banner" />
      <h1 style={{ fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}>{event.title}</h1>
      <h2 style={{ fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}>Request Join Event Form</h2>
      <p style={{ color:"grey",fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}>Fill up form to request join event here.</p>
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
                id="yearlevel"
                name="yearlevel"
                value={formData.yearlevel}
                onChange={handleChange}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
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
                <MenuItem value="CNAHS">College of Nursing and Allied Health Sciences</MenuItem>
              </Select>
            </FormControl>

            <Grid item xs={12}>
              {/* <FormControl fullWidth>
                <FormLabel style={{ textAlign: 'center', marginLeft: '150px', marginRight: '100px' }}>
                  Please provide proof of payment
                </FormLabel>
                <Input
                  id="proofOfPayment"
                  name="proofOfPayment"
                  type="file"
                  onChange={handleChange}
                />
              </FormControl> */}
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