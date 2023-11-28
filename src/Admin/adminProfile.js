import React from "react";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../Components/header";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import Footer from "../Components/footer";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function AdminProfile() {
  return (
    <div>
      <ResponsiveAppBar />
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
              alt="Kyle"
              src="/static/images/avatar/2.jpg"
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
          <h2 style={{ fontSize: "2.8rem" }}>Kyle Weig</h2>
          <p style={{ fontSize: "1.2rem", marginTop: "-1.8rem" }}>PE FACULTY</p>
        </div>
        <div
          style={{
            marginTop: "1rem",
            textAlign: "right",
            marginTop: "7.4rem",
            marginRight: "9.5rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {/* <Link to="/UserProfileEdit">
            {" "}
            <Button sx={{ color: "black", padding: 0, margin: 0 }}>
              <p style={{ fontSize: ".9rem" }}>
                <u>Edit Profile</u>
              </p>
            </Button>
          </Link> */}
        </div>
      </div>
      <Container maxWidth="lg" sx={{ marginBottom: "5rem" }}>
        <div>
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
              <div>
                <p>
                  <b>First Name:</b> Kyle
                </p>
                <p>
                  <b>Middle Name:</b> M.
                </p>
                <p>
                  <b>Last Name:</b> Weig
                </p>
                <p>
                  <b>Gender:</b> Male
                </p>
                <p>
                  <b>Department:</b> Physical Education
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                <p>
                  <b>Email Address:</b> kyle.weig@cit.edu
                </p>
                <p>
                  <b>Phone:</b> +63 912 345 6789
                </p>
                <p>
                  <b>Date of Birth:</b> July 5, 2001
                </p>
                <p>
                  <b>Country:</b> Philippines
                </p>
                <p>
                  <b>Link To Teams:</b> http://link_to_teams
                </p>
              </div>
            </Grid>

            <Grid item xs={12}>
              {/* Add any additional content for the third grid item */}
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
              resize: "none", // Prevent textarea resizing
              fontFamily: "'DM Sans', sans-serif", // Apply the desired font
              fontSize: "1rem", // Set the desired font size
            }}
            defaultValue="I like cats"
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
