import React, { useState } from "react";
import ResponsiveAppBar from "../Components/header";
import Container from "@mui/material/Container";
import axios from "axios";
import "./OrganizerApplicationForm.css";
import Button from "../Components/ButtonMaroon";
import Footer from "../Components/footer";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    role: "",
    department: "",
    organizer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (formData) => {
    // Check if required fields are filled
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.department &&
      formData.organizer
    ) {
      // Check email format using a simple regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        console.log("Email is not valid!");
        return false;
      }

      // Additional validation logic for specific fields
      // Check the length of the password (assuming it's a required field)
      if (formData.password && formData.password.length < 8) {
        console.log("Passowrd is too short!");
        return false;
      }

      // Check the format of the phone number (assuming it's optional)
      const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
      if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
        console.log("Phone number is not in the correct format!");
        return false;
      }

      // If all checks pass, the form is valid
      return true;
    }

    // If any required field is missing, the form is not valid
    return false;
  };

  const submitForm = async () => {
    try {
      if (!validateForm(formData)) {
        console.error("Please fill out all required fields.");
        return;
      }

      // Replace the following with actual user and organizer IDs
      const userId = ""; // Add logic to get the user ID
      const organizerId = ""; // Add logic to get the organizer ID

      // Make a POST request to the new endpoint
      const response = await axios.post(
        "http://localhost:8080/ApplicationForm/insertApplicationForm",
        {
          userId,
          organizerId,
          fname: formData.firstName,
          mname: formData.middleName,
          lname: formData.lastName,
          srole: formData.role,
          semail: formData.email,
          department: formData.department,
          organizer: formData.organizer,
        }
      );

      // Log the server response (for demonstration purposes)
      alert("Successfully Submitted", response.data);

      // You can perform additional actions based on the server response
      // For example, show a success message or redirect the user
    } catch (error) {
      // Handle errors
      alert("Error submitting form:", error);
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
        src="img/organizerrequest.jpg"
        alt="logo"
        style={{ width: "100%" }}
      />
      <Container maxWidth="lg">
        <div className="centered-form">
          <h1 style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Application Form
          </h1>
          <div className="centered-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h5>First Name:</h5>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  style={{
                    borderRadius: "45px",
                    padding: "15px",
                    width: "100%",
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <h5>Middle Name:</h5>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  placeholder="Enter Middle Name"
                  style={{
                    borderRadius: "45px",
                    padding: "15px",
                    width: "100%",
                  }}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <h5>Last Name:</h5>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  style={{
                    borderRadius: "45px",
                    padding: "15px",
                    width: "100%",
                  }}
                  required
                />
              </div>
              {/* <div className="form-group">
                <h5>Event Name:</h5>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  placeholder="Enter Event Name"
                  style={{
                    borderRadius: "45px",
                    padding: "15px",
                    width: "100%",
                  }}
                  required
                />
              </div> */}
              <div className="form-group">
                <h5>School Email Address:</h5>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter School Email Address"
                  style={{
                    borderRadius: "45px",
                    padding: "15px",
                    width: "100%",
                    maxWidth: "600px",
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <h5>Please Select Role:</h5>
                <div>
                  <input
                    type="radio"
                    name="role"
                    value="faculty"
                    checked={formData.role === "faculty"}
                    onChange={handleChange}
                    required
                  />
                  <label>Faculty</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={formData.role === "student"}
                    onChange={handleChange}
                    required
                  />
                  <label>Student</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="role"
                    value="staff"
                    checked={formData.role === "staff"}
                    onChange={handleChange}
                    required
                  />
                  <label>Staff</label>
                </div>
              </div>
              {/* <div className="form-group">
                <h5>Year Level</h5>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="None">None</option>
                </select>
              </div> */}
              <div className="form-group">
                <h5>Select Department</h5>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <option value="CEA">CEA</option>
                  <option value="CCS">CCS</option>
                  <option value="CMBA">CMBA</option>
                  <option value="CASE">CASE</option>
                  <option value="CNAHS">CNAHS</option>
                  <option value="CCJ">CCJ</option>
                  <option value="None">None</option>
                </select>
              </div>
              <div className="form-group">
                <h5>Select Organizer</h5>
                <select
                  name="organizer"
                  value={formData.organizer}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <option value="GDSC">GDSC</option>
                  <option value="CCS">CCS</option>
                  <option value="CMBA">CMBA</option>
                  <option value="CASE">CASE</option>
                  <option value="CNAHS">CNAHS</option>
                  <option value="CCJ">CCJ</option>
                  <option value="None">None</option>
                </select>
              </div>

              <div className="form-group">
                <h5>Drag a Photo or Click to Upload:</h5>
                <div
                  className="drag-drop-area"
                  onClick={() =>
                    document.querySelector('input[name="photo"]').click()
                  }
                >
                  <div className="drag-drop-box">
                    {formData.photo ? (
                      <img
                        src={URL.createObjectURL(formData.photo)}
                        alt="Uploaded"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <p>Drag & Drop or Click to Upload</p>
                    )}
                  </div>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) =>
                      setFormData({ ...formData, photo: e.target.files[0] })
                    }
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div
                className="form-group"
                style={{ textAlign: "center", padding: "100px" }}
              >
                <Button onClick={submitForm} />
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
