import React, { useState } from "react";
import ResponsiveAppBar from "../Components/header";
import Container from "@mui/material/Container";
import axios from "axios";
import "./OrganizerApplicationForm.css";
import ButtonM from "../Components/ButtonMaroon";
import Footer from "../Components/footer";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    role: "faculty",
    department: "ccs",
    organizer: "gdsc",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async () => {
    try {
      // Replace the following with actual user and organizer IDs
      const userId = "";
      const organizerId = "";

      // Make a POST request to the organizer request endpoint
      const response = await axios.post(
        "http://localhost:8080/ManageOrganizerRequest",
        {
          userId,
          organizerId,
          status: "pending", // You can set the initial status here
          schoolEmailAddress: formData.email,
          role: formData.role,
          department: formData.department,
          organization: formData.organizer,
        }
      );

      // Log the server response (for demonstration purposes)
      console.log("Successfully Submitted", response.data);

      // You can perform additional actions based on the server response
      // For example, show a success message or redirect the user
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
      // You can also show an error message to the user
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function to submit the form data
    submitForm();
  };

  return (
    <>
      <ResponsiveAppBar />
      <img
        src="img/EventJoinRequestHeroBanner.png"
        alt="logo"
        style={{ width: "100%" }}
      />
      <Container maxWidth="lg">
        <div className="centered-form">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Application Form
          </h2>
          <div className="centered-form">
            <form onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="form-group">
                <h5
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    marginTop: "5rem",
                    color: "#666666",
                  }}
                >
                  First Name:
                </h5>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    width: "100%",
                    height: "50%",
                    borderRadius: "45px",
                    padding: "15px",
                  }}
                  required
                />
              </div>

              {/* Middle Name */}
              <div className="form-group">
                <h5
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    marginTop: "1rem",
                    color: "#666666",
                  }}
                >
                  Middle Name:
                </h5>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  placeholder="Enter Middle Name"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    width: "100%",
                    height: "50%",
                    borderRadius: "45px",
                    padding: "15px",
                  }}
                  onChange={handleChange}
                />
              </div>

              {/* Last Name */}
              <div className="form-group">
                <h5
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    marginTop: "1rem",
                    color: "#666666",
                  }}
                >
                  Last Name:
                </h5>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    width: "100%",
                    height: "50%",
                    borderRadius: "45px",
                    padding: "15px",
                  }}
                  required
                />
              </div>

              {/* School Email Address */}
              <div className="form-group">
                <h5
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    marginTop: "1rem",
                    color: "#666666",
                  }}
                >
                  School Email Address:
                </h5>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter School Email Address"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    width: "600px",
                    height: "45px",
                    borderRadius: "45px",
                    padding: "0 15px",
                  }}
                  required
                />
              </div>

              {/* Role */}
              <div className="form-group">
                <h5
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    marginTop: "1rem",
                    color: "#666666",
                  }}
                >
                  Please Select Role:
                </h5>
                <div>
                  <input
                    type="radio"
                    id="faculty"
                    name="role"
                    value="faculty"
                    checked={formData.role === "faculty"}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="faculty"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Faculty
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="student"
                    name="role"
                    value="student"
                    checked={formData.role === "student"}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="student"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Student
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="staff"
                    name="role"
                    value="staff"
                    checked={formData.role === "staff"}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="staff"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Staff
                  </label>
                </div>
              </div>

              {/* Your Department */}
              <div className="form-group" style={{ marginTop: "2rem" }}>
                <label
                  htmlFor="yourdepartment"
                  style={{ width: "100%", fontFamily: "DM Sans, sans-serif" }}
                >
                  Your Department:
                </label>
                <select
                  id="yourdepartment"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <option
                    value="ccs"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    CCS
                  </option>
                  <option
                    value="cea"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    CEA
                  </option>
                  <option
                    value="other"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Other
                  </option>
                </select>
              </div>

              {/* Organizer */}
              <div className="form-group" style={{ marginTop: "2rem" }}>
                <label
                  htmlFor="organizer"
                  style={{ width: "100%", fontFamily: "DM Sans, sans-serif" }}
                >
                  Organizer:
                </label>
                <select
                  id="organizer"
                  name="organizer"
                  value={formData.organizer}
                  onChange={handleChange}
                  required
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <option
                    value="gdsc"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    GDSC
                  </option>
                  <option
                    value="ccs"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    CCS
                  </option>
                  <option
                    value="other"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Other
                  </option>
                </select>
              </div>

              {/* Submit Button */}
              <div
                className="form-group"
                style={{ marginTop: "2rem", textAlign: "center" }}
              >
                <ButtonM onClick={submitForm} name="Submit">
                  Submit
                </ButtonM>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ApplicationForm;
