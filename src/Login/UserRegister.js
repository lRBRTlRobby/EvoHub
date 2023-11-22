import React, { useState } from 'react'
import { Button, Grid, TextField } from "@mui/material";
import './UserRegister.css'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import axios from 'axios';

export default function EventRegister() {
    const [userData, setUserData] = useState({
        fname: '',
        mname: '',
        lname: '',
        dept: '',
        email: '',
        pass: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'pass') {
            // Password validation logic
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if (passwordRegex.test(value)) {
                setUserData((prevData) => ({
                    ...prevData,
                    [name]: value,
                }));
            } else {
                // Password is not valid, show an alert to the user
                alert('Invalid password. Follow the password combination rule.');
            }
        } else {
            // For other fields, update the state directly
            setUserData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSignUp = async () => {
        if (document.getElementById("fname").value != '' && document.getElementById("mname").value != '' && document.getElementById("lname").value != '' && document.getElementById("dept").value != '' && document.getElementById("email").value != '' && document.getElementById("pass").value != '') {
            if (document.getElementById("pass").value.length < 8) {
                alert('Please enter a password.');
                return;
            }
            if (document.getElementById("pass").value.length >= 8) {
                if (!(/[A-Z]/.test(document.getElementById("pass").value) && /[a-z]/.test(document.getElementById("pass").value))) {
                    alert('Wrong input password.');
                    return;
                }
            }


            try {
                const response = await axios.post('http://localhost:8080/User/insertUser', {
                    fname: document.getElementById("fname").value,
                    mname: document.getElementById("mname").value,
                    lname: document.getElementById("lname").value,
                    dept: document.getElementById("dept").value,
                    email: document.getElementById("email").value,
                    pass: document.getElementById("pass").value,
                });
                console.log('Registration successful:', response.data);
                // Redirect or show a success message as needed
            } catch (error) {
                console.error('Error during registration:', error);
                // Handle registration failure, show error message, etc.
            }

        } else {
            alert('Please fill all the fields');
        }
    };


    return (
        <>
            <div className="reg-container">
                <Container maxWidth="x1">
                    <Grid container spacing={2} style={{ margin: "0 auto" }}>
                        <Grid item xs={6} md={6}>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <div className="in-container">
                                <Link to="/"><Button sx={{ display: 'flex', left: '52%', position: 'absolute' }} ><img className='back' src="/img/back.png" /></Button></Link>
                                <br /><br />
                                <h1 style={{ fontFamily: "'DM Sans', sans-serif" }}>Register as User</h1>
                                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "400" }}>Create your account. It's free and only takes a minute</h3>
                                <div>
                                    <TextField
                                        className='txt'
                                        id="fname"
                                        label="First Name"
                                        type="text"
                                        variant='outlined'
                                        onChange={handleChange}
                                    /><br />
                                    <TextField
                                        className='txt'
                                        id="mname"
                                        label="Middle Name"
                                        type="text"
                                        variant='outlined'
                                        onChange={handleChange}
                                    /><br />
                                    <TextField
                                        className='txt'
                                        id="lname"
                                        label="Last Name"
                                        type="text"
                                        variant='outlined'
                                        onChange={handleChange}
                                    /><br />
                                    <TextField
                                        className='txt'
                                        id="dept"
                                        label="Department"
                                        type="text"
                                        variant='outlined'
                                        onChange={handleChange}
                                    /><br />
                                    <TextField
                                        className='txt'
                                        id="email"
                                        label="Email"
                                        type="text"
                                        variant='outlined'
                                        onChange={handleChange}
                                    /><br />
                                    <TextField
                                        className='txt'
                                        id="pass"
                                        label="Password"
                                        type="password"
                                        variant='outlined'
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={{ display: "flex", padding: 0, margin: "0 auto", justifyContent: "center" }}>


                                    <p className='terms' style={{ fontFamily: "'DM Sans', sans-serif" }}><input type="checkbox" />By signing up, I agree with <u>Terms and conditions.</u></p>


                                </div>
                                <Button sx={{ backgroundColor: "#800000", ":hover": { backgroundColor: "#800000" } }} variant="contained" onClick={handleSignUp}>Sign up</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}
