import React, { useState } from "react";
import Container from "@mui/material/Container";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBarOrgan from "../Components/organHeader";
import ButtonM from "../Components/ButtonMaroon";

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
    organizer:[],
    role:[],
    sponsors:[]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedDate = name === "date" ? formatDate(value) : value;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedDate,
    }));
  };
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    // For example, you can send the formData to a server

    // Log the form data to the console (for demonstration purposes)
    console.log(formData);
  };
  const handleAddOrganizer = () => {
    setFormData({
      ...formData,
      organizer: [...formData.organizer, ""],
      role: [...formData.role, ""],
    });
  };
  
  
  
  
  const handleRemoveOrganizer = (index) => {
    const updatedOrganizers = [...formData.organizer];
    updatedOrganizers.splice(index, 1);
    setFormData({
      ...formData,
      organizer: updatedOrganizers,
    });
  };
  
  const handleOrganizerChange = (e, index) => {
    const updatedOrganizers = [...formData.organizer];
    updatedOrganizers[index] = e.target.value;
    setFormData({
      ...formData,
      organizer: updatedOrganizers,
    });
  };
  const handleRoleChange = (e, index) => {
    const updatedRoles = [...formData.role];
    updatedRoles[index] = e.target.value;
    setFormData({
      ...formData,
      role: updatedRoles,
    });
  };
  

  const handleAddSponsor = () => {
    setFormData({
      ...formData,
      sponsors: [...formData.sponsors, { name: "" }],
    });
  };


  const handleSponsorChange = (e, index) => {
    const updatedSponsors = [...formData.sponsors];
    updatedSponsors[index][e.target.name] = e.target.value;
    setFormData({
      ...formData,
      sponsors: updatedSponsors,
    });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  const handleRemoveSponsor = (index) => {
    const updatedSponsors = [...formData.sponsors];
    updatedSponsors.splice(index, 1);
    setFormData({
      ...formData,
      sponsors: updatedSponsors,
    });
  };

console.log(formData)
  return (
    <>
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
                  {formData.date && (
                    <p
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
                  Add Organizer
                </h5>
                

                {formData.organizer.map((organizer, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                  <div style={{ display: "flex" }}>
                    <input
                      type="text"
                      id={`organizer-${index}`}
                      name="organizer"
                      value={organizer}
                      placeholder={`Organizer ${index + 1} Name`}
                      onChange={(e) => handleOrganizerChange(e, index)}
                      style={{
                        width: "30%",
                        height: "45px",
                        borderRadius: "45px",
                        padding: "0 15px",
                        marginRight: "10px",
                      }}
                      required
                    />
                    <input
                      type="text"
                      placeholder={`Role ${index + 1} Name`}
                      id={`role-${index}`}
                      name="role"
                      value={formData.role[index]}  // Use formData.role[index] for the role field
                      onChange={(e) => handleRoleChange(e, index)}
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
                      onClick={() => handleRemoveOrganizer(index)}
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

            {/* Add Sponsors */}
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
            </div>

              {/* Submit Button */}
              <div
                className="form-group"
                style={{ marginTop: "2rem", textAlign: "center" }}
              >
                <ButtonM name="Next"/>
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
