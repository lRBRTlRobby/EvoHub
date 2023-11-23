import React, { useState } from "react";
import ResponsiveAppBar from "../Components/header";
import Container from "@mui/material/Container";
import "./OrganizerApplicationForm.css"; // Make sure to adjust the import path based on your project structure

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    // For example, you can send the formData to a server

    // Log the form data to the console (for demonstration purposes)
    console.log(formData);
  };

  return (
    <>
      <ResponsiveAppBar />
      <img src="img/organizerrequest.jpg" alt="logo" />
      <Container maxWidth="lg">
        <div className="centered-form">
          <h2
            style={{ fontFamily: "'DM Sans', sans-serif", marginTop: "5rem" }}
          >
            Application Form
          </h2>
          <div className="centered-form">
            <form onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="form-group">
                <h5
                  style={{
                    fontFamily: "DM Sans",
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
                    fontFamily: "DM Sans",
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
                    fontFamily: "DM Sans",
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
                    fontFamily: "DM Sans",
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
                <p>Please select your role:</p>
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
                  <label htmlFor="faculty">Faculty</label>
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
                  <label htmlFor="student">Student</label>
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
                  <label htmlFor="staff">Staff</label>
                </div>
              </div>

              {/* Your Department */}
              <div className="form-group" style={{ marginTop: "2rem" }}>
                <label htmlFor="yourdepartment" style={{ width: "100%" }}>
                  Your Department:
                </label>
                <select
                  id="yourdepartment"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <option value="ccs">CCS</option>
                  <option value="cea">CEA</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Organizer */}
              <div className="form-group" style={{ marginTop: "2rem" }}>
                <label htmlFor="organizer" style={{ width: "100%" }}>
                  Organizer:
                </label>
                <select
                  id="organizer"
                  name="organizer"
                  value={formData.organizer}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <option value="gdsc">GDSC</option>
                  <option value="ccs">CCS</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <div
                className="form-group"
                style={{ marginTop: "2rem", textAlign: "center" }}
              >
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#800000",
                    color: "white",
                    width: "30%",
                    height: "100%",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ApplicationForm;
