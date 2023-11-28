import React, { useState } from "react";
import Container from "@mui/material/Container";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBarOrgan from "../Components/organHeader";
import ButtonM from "../Components/ButtonMaroon";
import axios from 'axios';
import { Button } from '@mui/material'

export default function CreateEventForm() {
  
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

  const resetForm = () => {
    setFormData({
      eventTitle: "",
      description: "",
      date: "",
      time: "",
      duration: "",
      location: "",
      organizer: "",
      year: "",
      department: "",
      payment: "",
      max: "",
    });
  };


  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Replace 'http://localhost:8080' with the actual base URL of your API
      const response = await axios.post('http://localhost:8080/Image/upload', formData);

      // Assuming the response contains the image URL
      await setImageUrl(response.data);
      console.log('Image uploaded successfully:', response.data);
      // Clear the file input
      setFile(null);
    } catch (error) {
      alert("Uploaded Image Filename is already Taken");
      console.error('Error uploading image:', error.message);
    }
  };

  const date = () => {


  }
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Convert date format to string
      const formattedDate = new Date(formData.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
  
      const response = await axios.post(
        "http://localhost:8080/Event/insertEvent",
        {
          title: formData.eventTitle,
          description: formData.description,
          date: formattedDate, // Use the formatted date as a string
          time: formData.time,
          duration: formData.duration,
          location: formData.location,
          organizer: formData.organizer,
          yearlevel: formData.year,
          department: formData.department,
          payment: formData.payment,
          maxAttend: formData.max,
          image: imageUrl,
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
            <h2 style={{ fontFamily: "'DM Sans', sans-serif" ,textAlign:"left"}}>Create Event Form</h2>

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
                
              {/* 

            <div>
              <button
                type="button"
                onClick={handleAddOrganizer}
                style={{
                  backgroundColor: "#008000",
                  color: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                Add More Organizer
              </button>
            </div>
            </div>

            Add Sponsors
            <div className="form-group" style={{ marginTop: "2rem" }}>
                <h5
                  style={{
                    fontFamily: "DM Sans",
                    marginTop: "1rem",
                    color: "#666666",
                  }}
                >
                  Add Sponsors
                </h5>

                {formData.sponsors.map((sponsor, index) => (
                  <div key={index} style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex" }}>
                      <input
                        type="text"
                        id={`sponsor-${index}`}
                        name="name" // Changed to "name" to match the property in formData.sponsors
                        value={sponsor.name}
                        placeholder={`Sponsor ${index + 1} Name`}
                        onChange={(e) => handleSponsorChange(e, index)}
                        style={{
                          width: "30%",
                          height: "45px",
                          borderRadius: "45px",
                          padding: "0 15px",
                          marginRight: "10px",
                        }}
                        required
                      />

                      <button
                        type="button"
                        onClick={() => handleRemoveSponsor(index)}
                        style={{
                          backgroundColor: "#FF0000",
                          color: "white",
                          borderRadius: "10px",
                          padding: "10px",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div>
                  <button
                    type="button"
                    onClick={handleAddSponsor}
                    style={{
                      backgroundColor: "#008000",
                      color: "white",
                      borderRadius: "10px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Add More Sponsor
                  </button>
            </div>
            </div> */}
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
                    <option value="4">4</option>
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
                    <option value="College of Engineering and Architecture">CEA</option>
                    <option value="College of Computer Studies">CCS</option>
                    <option value="College of Mngnt Bussiness Administration">CMBA</option>
                    <option value="College of Arts and Sciences">CASE</option>
                    <option value="College of Natural Arts of Health Sciences">CNAHS</option>
                    <option value="College of Criminology">CCJ</option>  {/* Corrected the spelling here */}
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

                <input type="file" onChange={handleFileChange} />
                <Button onClick={async (e) => { e.preventDefault(); await handleUpload(); }} disabled={!file}>
                
                  Upload Image
                </Button>


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
