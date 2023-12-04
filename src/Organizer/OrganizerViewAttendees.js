
import Footer from "../Components/footer";
import EventRibbon_noBtn from "../Components/EventRibbon_noBtn";
import { Avatar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem, Container } from '@mui/material';
import axios from 'axios';
import "../Components/EventCatBtn.css";
import React, { useState, useEffect } from 'react';
import ResponsiveAppBarOrgan from "../Components/organHeader";
import { useParams } from 'react-router-dom';


export default function ViewAttendees(){
    const [filterValue, setFilterValue] = useState('');
    const [event, setEvents] = useState({});
    const { eventId } = useParams();
    const [participants, setParticipants] = useState([]);
   
    useEffect(() => {
      window.scroll(0, 0);
      axios.get(`http://localhost:8080/Event/getEvent/${eventId}`)
        .then(response => {
          console.log(response.data);
          setEvents(response.data);
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    }, [eventId]);

    useEffect(() => {
        window.scroll(0, 0);
        axios.get(`http://localhost:8080/participantrequest/getAllParRequests`)
            .then(response => {
                console.log(response.data);
                // Filter participants based on the condition that status is 'Accepted'
                const filteredParticipants = response.data.filter(participant => participant.status === 'Accepted');
                console.log(filteredParticipants)
                // Set the filtered participants
                setParticipants(filteredParticipants);
                // Set the events if needed
                // setEvents(filteredParticipants);
            })
            .catch(error => {
                alert('Error fetching events:', error);
            });
    }, [eventId]);

    function createData(prid, firstname, lastname, email, department, yearlevel, eventId, userId) {
        return { prid, firstname, lastname, email, department, yearlevel, eventId, userId };
    }

    const rows = participants.map(participant =>
        createData(
            participant.prid,
            participant.firstname,
            participant.lastname,
            participant.email,
            participant.department,
            participant.yearlevel,
            participant.eventId,
            participant.userId
        )
    );

    const filteredRows = rows.filter((row) => (!filterValue || row.carbs === filterValue));

    console.log('rows:', participants);
    
    
    return (
        <>
            <ResponsiveAppBarOrgan />
            {/* Buttons for View Attendees and ManageReq */}
            {/* Add your button code here */}
           
            <Container maxWidth="lg">
            <img
                src={`/uploads/${event.image}`}
                alt="here"
                style={{
                width: '100%',
                height: '500px',
                borderRadius: '45px', // Adjust the radius as needed
                display: 'block',
                margin: 'auto',
            }}
            />
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '32px', marginRight: '600px', marginLeft: '150px' }}>2023 - Explore, Learn, Innovate!</h3>

                <p style={{ textAlign: 'justify', width: '810px', marginRight: '350px', marginLeft: '150px', fontSize: '20px', textDecoration: 'underline' }}>Cebu Institute of Technology</p>

                {/* New text added below Cebu Institute Technology */}
                <p style={{ textAlign: 'justify', width: '810px', marginRight: '350px', marginLeft: '150px', fontSize: '20px' }}>
                    TechXperience 2023 aims to inspire, educate, and connect tech enthusiasts by providing access to cutting-edge talks, hands-on workshops, and networking opportunities, both in-person and online. Explore, learn, and innovate with us!
                </p>
            </Container>
            <br></br>
            <br></br>
            <div>
                {/* RIBBON HERE */}
            </div>
            <Container maxWidth="lg">
            <br></br>
            <br></br>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', width: '300px', textAlign: 'center', marginLeft: '200px' }}>
                View Attendees
            </h2>
            {/* table */}
            <div className="attendee-table">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        {/* Dropdown/Select for filtering */}
                        <Select
                            value={filterValue}
                            onChange={(e) => { setFilterValue(e.target.value) }}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}

                        >
                            <MenuItem value="" >
                                All
                            </MenuItem>
                            {/* Add unique carb values from your rows */}
                            {[...new Set(rows.map((row) => row.carbs))].map((carbs) => (
                                <MenuItem key={carbs} value={carbs}>
                                    {carbs}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <TextField
                            className='txt'
                            id="fname"
                            label="Search"
                            type="text"
                            variant='outlined'
                        />
                    </div>
                </div>
                <br/>
                {/* TABLE */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#C02147' }}>
                                <TableCell align="center" sx={{ color: 'white' }}>Attendees</TableCell>

                                <TableCell align="center" sx={{ color: 'white' }}>Department</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>Year Level</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows.map((row) => (
                                <TableRow
                                    key={row.prid}
                                    // TableRow contents
                                >
                                   <TableCell component="th" scope="row" align='center'>
                                                <div style={{display:'flex', alignItems:'center'}}>
                                                <Avatar  alt={row.name} src="/static/images/avatar/2.jpg"  sx={{marginRight:'1rem'}} />
                                                    <div>
                                                       {row.firstname} {row.lastname}
                                                    <p>{row.email}</p> 
                                                    </div>
                                                    </div>
                                                    
                                    </TableCell>
                                    <TableCell align="center">{row.department}</TableCell>
                                    <TableCell align="center">{row.yearlevel}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{ border: '2px', borderColor: 'black', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button>Previous</Button>
                    <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>Page 1 of 1</p>
                    <Button>Next</Button>
                </div>
            </div>
            </div>
        </Container>
        </>
    )
}