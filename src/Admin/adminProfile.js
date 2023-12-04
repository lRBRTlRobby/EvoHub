import React, { useState, useEffect } from "react";
import axios from 'axios';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import Footer from "../Components/footer";
import Button from "@mui/material/Button";
import AdminHeader from "../Components/adminHeader";

export default function AdminProfile() {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admins/getAdmin/1');
        setAdminData(response.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <AdminHeader />
      <div>
        <img
          src="./img/userprofile.jpg"
          alt="logo"
          className="banner"
          style={{ position: "absolute", zIndex: -1, width: "100%" }}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginTop: "8.6rem" }}>
            <Avatar
              alt={adminData ? adminData.firstName : "Admin"}
              src={adminData ? adminData.avatarSrc : "/static/images/avatar/default.jpg"}
              sx={{ width: 120, height: 120 }}
            />
            <div></div>
          </div>
        </div>
        <div
          style={{
            marginTop: "1rem",
            textAlign: "center",
            marginTop: "-1.5rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {adminData && (
            <>
              <h2 style={{ fontSize: "2.8rem" }}>{adminData.firstName} {adminData.lastName}</h2>
              <p style={{ fontSize: "1.2rem", marginTop: "-1.8rem" }}>{adminData.title}</p>
            </>
          )}
        </div>
        <Container maxWidth="lg" sx={{ marginBottom: "5rem" }}>
          <Grid
            container
            spacing={2}
            style={{
              margin: "0 auto",
              fontFamily: "'DM Sans', sans-serif",
              marginTop: "2rem", // Added margin-top for spacing
              padding: "5rem",
            }}
          >
            <Grid item xs={12} md={6}>
              {adminData && (
                <div>
                  <p><b>First Name:</b> {adminData.firstName}</p>
                  <p><b>Middle Name:</b> {adminData.middleName}</p>
                  <p><b>Last Name:</b> {adminData.lastName}</p>
                  <p><b>Gender:</b> {adminData.gender}</p>
                  <p><b>Department:</b> {adminData.department}</p>
                </div>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {adminData && (
                <div>
                  <p><b>Email Address:</b> {adminData.email}</p>
                  <p><b>Phone:</b> {adminData.phone}</p>
                  <p><b>Date of Birth:</b> {adminData.birthdate}</p>
                  <p><b>Country:</b> {adminData.country}</p>
                  <p><b>Link To Teams:</b> {adminData.teamsLink}</p>
                </div>
              )}
            </Grid>
          </Grid>
          <p>
            <h3>About Me</h3>
          </p>
          <textarea
            style={{
              border: "1px solid black",
              height: "10rem",
              width: "100%",
              margin: "0 auto",
              borderRadius: "20px",
              margin: "2rem auto",
              padding: "1rem",
              resize: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
            }}
            value={adminData ? adminData.bio : ""}
            readOnly
          />
        </Container>
        <Footer />
      </div>
    </div>
  );
}
