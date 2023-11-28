import React, { useState } from 'react'
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../Components/header';
import Avatar from '@mui/material/Avatar';
import { Button, Grid, TextField } from '@mui/material';
import Footer from '../Components/footer';
import ButtonM from '../Components/ButtonMaroon';
import { useUser } from '../Components/UserProvider';
import axios from 'axios';

export default function UserProfileEdit() {
    const { user, login } = useUser();
    const [selectedGender, setSelectedGender] = useState(user.gender || '');

    const [lastname, setLastname] = useState('');

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
        handleTextChange('gender', event.target.value);  // Update the formData with the new gender
    };

    const [formData, setFormData] = useState({
        fname: user.fname || '',
        mname: user.mname || '',
        lname: user.lname || '',
        dept: user.dept || '',
        email: user.email || '',
        pass: user.pass || '',
        gender: user.gender || '',
        dob: user.dob || '',
        mobNum: user.mobNum || '',
        city: user.city || '',
        country: user.country || '',
        bio: user.bio || '',
    });

    const handleTextChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleUpdateProfile = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/User/updateUser?userid=${user.userid}`, formData);

            // Update the user data in the UserProvider
            login(response.data);

            // Optionally, handle success cases here
            // For example, show a success message
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating user profile:', error);
            // Optionally, handle error cases here
            // For example, show an error message to the user
        }
    };

    const [textFieldHeight, setTextFieldHeight] = useState('auto');

    const handleInputChange = (event) => {
        if (event && event.target) {
            const inputLines = event.target.value.split('\n').length;
            const fixedLineHeight = 1.5;
            const newHeight = `${inputLines * fixedLineHeight}em`;
            setTextFieldHeight(newHeight);
        }
    };


    return (
        <div>
            <ResponsiveAppBar />
            <div>
                <img src="./img/userprofile.jpg" alt="logo" className="banner" />
            </div>

            <Container maxWidth="lg" sx={{ marginBottom: "5rem" }}>
                <div>
                    <div style={{ marginTop: "3rem", display: "flex", alignItems: "center" }}>
                        <Avatar alt={user.fname} src="/static/images/avatar/2.jpg" sx={{ width: 120, height: 120 }} />
                        <p>&nbsp;</p>
                        <ButtonM name="Upload" />
                    </div>
                    <Grid container spacing={2} style={{ margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
                        <Grid item xs={6} md={6}>
                            <p><b>First Name:</b></p>
                            <TextField
                                className='txt'
                                id="fname"
                                placeholder= 'First Name'
                                value={formData.fname}
                                onChange={(e) => handleTextChange('fname', e.target.value)}
                                type="text"
                                variant='outlined'
                                disabled
                            />
                            <p><b>Middle Name:</b></p>
                            <TextField
                                className='txt'
                                id="fname"
                                placeholder= 'Middle Name'
                                value={formData.mname}
                                type="text"
                                variant='outlined'
                                disabled
                            />
                            <p><b>Last Name:</b></p>
                            <TextField
                                className='txt'
                                id="lname"
                                value={formData.lname}
                                placeholder='Last Name'
                                type="text"
                                variant='outlined'
                                disabled
                            />
                            <div>
                                <label>
                                    <p><b>Gender: </b>
                                        <select value={selectedGender} onChange={handleGenderChange} disabled={ user.gender != null}>
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </p>
                                </label>
                            </div>

                            <p><b>Department:</b></p>
                            <TextField
                                className='txt'
                                id="fname"
                                placeholder='CCS'
                                value={formData.dept}
                                onChange={(e) => handleTextChange('dept', e.target.value)}
                                type="text"
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>

                            <p><b>Email Address:</b></p>
                            <TextField
                                className='txt'
                                id="fname"
                                value={formData.email}
                                onChange={(e) => handleTextChange('email', e.target.value)}
                                type="text"
                                variant='outlined'
                            />
                            <p><b>Phone:</b></p>
                            <TextField
                                className='txt'
                                id="fname"
                                value={formData.mobNum}
                                onChange={(e) => handleTextChange('mobNum', e.target.value)}
                                type="text"
                                variant='outlined'
                            />
                            <p><b>Date of Birth:</b></p>
                            <TextField
                                className='txt'
                                id="fname"
                                value={formData.dob}
                                onChange={(e) => handleTextChange('dob', e.target.value)}
                                type="text"
                                variant='outlined'
                            />
                            <p><b>City:</b></p>
                            <TextField
                                className='txt'
                                id="fname"
                                label="City"
                                value={formData.city}
                                onChange={(e) => handleTextChange('city', e.target.value)}
                                type="text"
                                variant='outlined'
                            />
                            <p><b>Country:</b></p>
                            <TextField
                                className='txt'
                                id="fname"
                                label="Country"
                                value={formData.country}
                                onChange={(e) => handleTextChange('country', e.target.value)}
                                type="text"
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        </Grid>
                    </Grid>

                    <div style={{ marginBottom: "5rem" }}>
                        <TextField
                            className='txt'
                            id="fname"
                            label="I like cats"
                            value={formData.bio}
                                onChange={(e) => {handleTextChange('bio', e.target.value); handleInputChange(e);}}
                            type="text"
                            variant='outlined'
                            multiline
                            sx={{
                                width: "100%", maxWidth: "100%", maxHeight: "auto", padding: '1rem', display: "flex", maxHeight: "auto",
                                height: textFieldHeight, padding: 0, marginBottom: '1rem',
                            }}
                        />
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>

                    <Button sx={{
                        backgroundColor: 'maroon', color: 'white', fontFamily: "'DM Sans', sans-serif", width: '19rem', height: '4rem', fontWeight: 'bold', fontFamily: "'DM Sans', sans-serif", fontSize: '1rem',
                        display: "flex", justifyContent: "center", padding: 0, borderRadius: 50
                    }} onClick={handleUpdateProfile}>Update Profile</Button>
                </div>

            </Container>
            <Footer />
        </div>
    )
}
