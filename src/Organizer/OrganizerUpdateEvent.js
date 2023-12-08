import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBarOrgan from "../Components/organHeader";
// import ButtonM from "../Components/ButtonMaroon";
import axios from 'axios';
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom';

export default function UpdateEventForm() {
  const { eventId } = useParams();
  const [event, setEvents] = useState({});


  useEffect(() => {
    window.scroll(0, 0);
    axios.get(`http://localhost:8080/Event/getEvent/${eventId}`)
      .then(response => {
        console.log(response.data);
        setEvents(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, [eventId]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [formData, setFormData] = useState({
    eventTitle: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    location: "",
     organizer:"",
     year: "",
    department: "",
    payment: "",
    max: ""
    // role:[],
    // sponsors:[]
  });

  const date = () => {


  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedDate = name === "date" ? formatDate(value) : value;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedDate,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        `http://localhost:8080/Event/updateEvent?eventid=${eventId}`,
        {
          title: formData.eventTitle,
          description: formData.description,
          date: formData.date,
          time: formData.time,
          duration: formData.duration,
          location: formData.location,
          organizer: formData.organizer,
          yearlevel: formData.year,
          department: formData.department,
          payment: formData.payment,
          maxAttend: formData.max,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Log the response from the server
      console.log(response.data);
      alert("Success");
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };


console.log(formData)
  return (
    <>
      <></>    
      <ResponsiveAppBarOrgan/>
      <img src="img/createEventBanner.png" alt="logo"  style={{width:"100%"}} />
      <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid  xs={8}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif" ,textAlign:"left"}}>Update Event Form</h2>

            <form onSubmit={handleSubmit}>
              {/* Event Title */}
              <div className="form-group">
                <h5
                  style={{
                    fontFamily: "DM Sans",
                    marginTop: "5rem",
                    color: "#666666",
                  }}
                >
                  Event Title:
                </h5>
                <input
                  type="text"
                  id="eventTitle"
                  name="eventTitle"
                  value={formData.eventTitle}
                  onChange={handleChange}
                  placeholder="Enter Event Name"
                  style={{
                    width: "80%",
                    height: "50%",
                    borderRadius: "45px",
                    padding: "15px",
                  }}
                  required
                />
              </div>

              {/*Description*/}
              <div className="form-group">
                <h5
                  style={{
                    fontFamily: "DM Sans",
                    marginTop: "1rem",
                    color: "#666666",
                  }}
                >
                 Descripton
                </h5>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  placeholder="Enter Message Here"
                  style={{
                    width: "80%",
                    height: "154 px",
                    borderRadius: "45px",
                    padding: "15px",
                  }}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: "flex" }}>

                {/* Date */}
                <div className="form-group" style={{ flex: 1 }}>
                  <h5
                    style={{
                      fontFamily: "DM Sans",
                      marginTop: "1rem",
                      color: "#666666",
                    }}
                  >
                    Date
                  </h5>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="Date"
                    style={{
                      width: "45%",
                      height: "45px",
                      borderRadius: "45px",
                      padding: "0 15px",
                    }}
                    required
                  />
                  {formData.date && (
                    <p
                      id="fdate"
                      style={{
                        marginTop: "0.5rem",
                        color: "#666666",
                        fontFamily: "DM Sans",
                      }}
                    >
                      Selected Date: {formatDate(formData.date)}
                    </p>
                  )}
                </div>

                {/* Time 1 */}
                <div className="form-group" style={{ flex: 1 }}>
                  <h5
                    style={{
                      fontFamily: "DM Sans",
                      marginTop: "1rem",
                      color: "#666666",
                    }}
                  >
                    Time
                  </h5>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    placeholder="Time"
                    style={{
                      width: "45%", // Adjusted width
                      height: "45px",
                      borderRadius: "45px",
                      padding: "0 15px",
                    }}
                    required
                  />
                </div>

                {/* Duration */}
                <div className="form-group" style={{ flex: 1 }}>
                  <h5
                    style={{
                      fontFamily: "DM Sans",
                      marginTop: "1rem",
                      color: "#666666",
                    }}
                  >
                    Duration (Minutes)
                  </h5>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Hours"
                    style={{
                      width: "45%",
                      height: "45px",
                      borderRadius: "45px",
                      padding: "0 15px",
                    }}
                    required
                  />
                </div>
              </div>



              {/* Your Location */}
              <div className="form-group" style={{ marginTop: "2rem" }}>
              <h5
                    style={{
                      fontFamily: "DM Sans",
                      marginTop: "1rem",
                      color: "#666666",
                    }}
                  >
                    Location
                  </h5>
                  <select
                    id="location"
                    name="location"  // Make sure the name attribute is "location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    style={{
                      width: "45%",
                      height: "50px",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    <option value="Gymnasium">Gymnasium</option>
                    <option value="Learning Center">Learning Center</option>
                    <option value="Auditorium">Auditorium</option>
                    <option value="Wildcats Lounge<">Wildcats Lounge</option>
                    <option value="Covered Court">Covered Court</option>
                    <option value="Grandstand">Grandstand</option>  {/* Corrected the spelling here */}
                  </select>
                </div>
            {/* Organizer */}
              <div className="form-group" style={{ marginTop: "2rem" }}>
                <h5
                  style={{
                    fontFamily: "DM Sans",
                    marginTop: "1rem",
                    color: "#666666",
                  }}
                >
                  Head Organizer
                </h5>
                    <input
                      type="text"
                      id="organizer"
                      name="organizer"
                      value={formData.organizer}
                      placeholder="Organizer name"
                      onChange={handleChange}
                      style={{
                        width: "30%",
                        height: "45px",
                        borderRadius: "45px",
                        padding: "0 15px",
                        marginRight: "10px",
                      }}
                      required
                    />  
                </div>
                
            {/* Specify year Level*/}
            <div className="form-group" style={{ marginTop: "2rem" }}>
              <h5
                    style={{
                      fontFamily: "DM Sans",
                      marginTop: "1rem",
                      color: "#666666",
                    }}
                  >
                    Specify year Level
                  </h5>
                  <select
                    id="year"
                    name="year"  // Make sure the name attribute is "location"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    style={{
                      width: "45%",
                      height: "50px",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4<">4</option>
                    <option value="5">5</option>
                    <option value="None">None</option>  {/* Corrected the spelling here */}
                  </select>
                </div>

                {/* Specify department*/}
                <div className="form-group" style={{ marginTop: "2rem" }}>
              <h5
                    style={{
                      fontFamily: "DM Sans",
                      marginTop: "1rem",
                      color: "#666666",
                    }}
                  >
                    Specify department
                  </h5>
                  <select
                    id="department"
                    name="department"  
                    value={formData.department}
                    onChange={handleChange}
                    required
                    style={{
                      width: "45%",
                      height: "50px",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    <option value="CEA">CEA</option>
                    <option value="CCS">CCS</option>
                    <option value="CMBA">CMBA</option>
                    <option value="CASE<">CASE</option>
                    <option value="CNAHS">CNAHS</option>
                    <option value="CCJ">CCJ</option>  {/* Corrected the spelling here */}
                    <option value="None">None</option>  {/* Corrected the spelling here */}
                  </select>
                </div>

                {/* Specify payment*/}
                <div className="form-group" style={{ marginTop: "2rem" }}>
              <h5
                    style={{
                      fontFamily: "DM Sans",
                      marginTop: "1rem",
                      color: "#666666",
                    }}
                  >
                    Specify payment
                  </h5>
                  <select
                    id="payment"
                    name="payment"  // Make sure the name attribute is "location"
                    value={formData.payment}
                    onChange={handleChange}
                    required
                    style={{
                      width: "45%",
                      height: "50px",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {/*  Maximum Attendees */}
                <div className="form-group" style={{ flex: 1 }}>
                  <h5
                    style={{
                      fontFamily: "DM Sans",
                      marginTop: "1rem",
                      color: "#666666",
                    }}
                  >
                    Maximum Attendees
                  </h5>
                  <input
                    type="number"
                    id="max"
                    name="max"
                    value={formData.max}
                    onChange={handleChange}
                    placeholder="Number of Attendees"
                    style={{
                      width: "45%",
                      height: "45px",
                      borderRadius: "45px",
                      padding: "0 15px",
                    }}
                    required
                  />
                </div>


              {/* Submit  Button */}
              <div
                className="form-group"
                style={{ marginTop: "2rem", textAlign: "center" }}
              >
                <Button 
                  onClick={handleSubmit}
                  sx={{
                  backgroundColor: 'maroon', color: 'white', fontFamily: "'DM Sans', sans-serif", width: '19rem', height: '4rem', fontWeight: 'bold', fontFamily: "'DM Sans', sans-serif", fontSize: '1rem',
                  display: "flex", justifyContent: "center", padding: 0, borderRadius: 50 }}>
                    Submit
                </Button>
              </div>
            </form>

          </Grid>
          <Grid  xs={4}>
            <img src="img/tips.png" alt="logo"  style={{width:"100%"}} />
          </Grid>
          
        </Grid>
      </Box>
      </Container>
    </>
    
  );
}
