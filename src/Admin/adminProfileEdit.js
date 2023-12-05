import React, { useState } from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Button, Grid, TextField } from "@mui/material";
import Footer from "../Components/footer";
import ButtonM from "../Components/ButtonMaroon";
import AdminHeader from "../Components/adminHeader";
import axios from 'axios';

export default function AdminProfileEdit() {
  const [selectedGender, setSelectedGender] = useState("");
  const [textFieldHeight, setTextFieldHeight] = useState("auto");
  const [formData, setFormData] = useState({
    adminName: '',
    email: '',
    pass: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    department: '',
    title: '',
    bio: '',
    country: '',
    city: '',
    birthdate: '',
    phone: ''
  });

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    setFormData({ ...formData, gender: event.target.value });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    const inputLines = value.split("\n").length;
    const fixedLineHeight = 1.5;
    const newHeight = `${inputLines * fixedLineHeight}em`;
    setTextFieldHeight(newHeight);
  };

  const handleProfileUpdate = async () => {
    try {
      await axios.post('http://localhost:8080/admins/updateAdmin/1', formData);
      alert('Profile Updated');
      // Handle success or navigate to another page upon successful update
    } catch (error) {
      alert('Error updating profile:', error);
      // Handle error state or display an error message to the user
    }
  };

  return (
    <div>
      <AdminHeader />
      <div>
        <img
          src="./img/userprofile.jpg"
          alt="logo"
          className="banner"
          width="100%"
        />
      </div>

      <Container maxWidth="lg" sx={{ marginBottom: "5rem" }}>
        <div>
          <div
            style={{ marginTop: "3rem", display: "flex", alignItems: "center" }}
          >
            <Avatar
              alt="Kyle"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 120, height: 120 }}
            />
            <p>&nbsp;</p>
            <ButtonM name="Upload" />
          </div>
          <Grid
            container
            spacing={2}
            style={{ margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Grid item xs={6} md={6}>
              <p>
                <b>First Name:</b>
              </p>
              <TextField
                className="txt"
                id="firstName"
                placeholder="Kyle"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <p>
                <b>Middle Name:</b>
              </p>
              <TextField
                className="txt"
                id="middleName"
                placeholder="Kyle"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <p>
                <b>Last Name:</b>
              </p>
              <TextField
                className="txt"
                id="lastName"
                placeholder="Weig"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <div>
                <label>
                  <p>
                    <b>Gender: </b>
                    <select
                    value={selectedGender}
                    onChange={handleGenderChange}
                    style={{ width: "20%", fontSize: ".9rem" }}
                  >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </p>
                </label>
              </div>

              <p>
                <b>Department:</b>
              </p>
              <TextField
                className="txt"
                id="department"
                placeholder="CCS"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <p>
                <b>Title:</b>
              </p>
              <TextField
                className="txt"
                id="title"
                placeholder="Physical Education"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <p>
                <b>Email Address:</b>
              </p>
              <TextField
                className="txt"
                id="email"
                placeholder="kyle.weig@cit.edu"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <p>
                <b>Phone:</b>
              </p>
              <TextField
                className="txt"
                id="phone"
                placeholder="+63 912 345 6789"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <p>
                <b>Date of Birth:</b>
              </p>
              <TextField
                className="txt"
                id="birthdate"
                placeholder="July 5, 2001"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <p>
                <b>City:</b>
              </p>
              <TextField
                className="txt"
                id="city"
                label="City"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
              <p>
                <b>Country:</b>
              </p>
              <TextField
                className="txt"
                id="country"
                label="Country"
                type="text"
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>

          <div style={{ marginBottom: "5rem" }}>
            <p>Bio</p>
            <TextField
              className="txt"
              id="bio"
              label="I like cats"
              type="text"
              variant="outlined"
              multiline
              onChange={handleInputChange}
              sx={{
                width: "100%",
                maxWidth: "100%",
                maxHeight: "auto",
                padding: "1rem",
                display: "flex",
                maxHeight: "auto",
                height: textFieldHeight,
                padding: 0,
                marginBottom: "1rem",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <ButtonM name="Update Profile" onClick={handleProfileUpdate} />
          
        </div>
        <div style={{  width:'800px',height:'50px',display: "flex", justifyContent: "center"  }}>
          <button onClick={handleProfileUpdate}>Update Profile</button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
