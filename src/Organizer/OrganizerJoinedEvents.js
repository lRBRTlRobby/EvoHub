import React, { useRef, useEffect, useState } from 'react'
import ResponsiveAppBar from '../Components/header'
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import ActionAreaCard from '../Components/eventCard';
import Footer from '../Components/footer';
import ResponsiveAppBarOrgan from '../Components/organHeader';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useOrganizer } from '../Components/OrganizerProvider';

export default function OrganizerJoinedEvents() {
    const containerRef = useRef(null);
    const containerRef1 = useRef(null);
    const [event, setEvents] = useState([]);
    const [participant, setParticipants] = useState([]);
    const {organizer} = useOrganizer();

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 300;
        }
    };

    const scrollLeft1 = () => {
        if (containerRef1.current) {
            containerRef1.current.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 300;
        }
    };
    const scrollRight1 = () => {
        if (containerRef1.current) {
            containerRef1.current.scrollLeft += 300;
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        axios.get('http://localhost:8080/participantrequest/getAllParRequests')
            .then(response => {
                const filteredEvents = response.data.filter(participant => participant.status === "Accepted" && participant.organizerId === organizer.oid);
                console.log("Filtered Events:", filteredEvents);
                setParticipants(filteredEvents);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);
    
    useEffect(() => {
        if (participant.length > 0) {
            // Extract eventIds from participants
            const eventIds = participant.map(participant => participant.eventId);
    
            // Fetch all events
            axios.get('http://localhost:8080/Event/getAllEvents')
                .then(response => {
                    // Filter events based on eventIds
                    const filtered = response.data.filter(event => eventIds.includes(event.eventId));
                    
                    // Set the filtered events
                    console.log("EventIds:", eventIds);
                    console.log("Filtered Events:", filtered);
                    setEvents(filtered);
                })
                .catch(error => {
                    console.error('Error fetching events:', error);
                });
        }
    }, [participant]);
    
    
    
    
      console.log("Organizer", organizer.oid)
      console.log("Participants ", participant)
      console.log("Event id from particiapnt ", event)
    return (
        <div>
            <ResponsiveAppBarOrgan />
            <div style={{ display: "flex", justifyContent: "center", height: '100%', width: '100%', margin: "0 auto", padding: 0 }}>
                <img style={{ minWidth: '100%', minHeight: '35vw', objectFit: 'cover', marginTop: 0 }} src="/img/Joined.jpg" alt="logo" className='logo' />
            </div>
            <Container maxWidth="lg">
                <div style={{ backgroundColor: '#C02147', display: "flex", justifyContent: "center", alignItems: "center", height: '8rem', width: '90%', margin: "2rem auto", padding: 0, borderRadius: 50 }}>
                    <TextField
                        className='txt'
                        id="outlined-password-input"
                        label="Search event here..."
                        type="text"
                        variant='outlined'
                        InputProps={{ sx: { backgroundColor: 'white', height: "5rem" } }}
                        InputLabelProps={{ sx: { position: 'absolute', top: '.2rem' } }}
                        sx={{ margin: "0", padding: 0, width: "38rem", right: "1.5rem" }}
                    /><Button sx={{
                        backgroundColor: '#EAA021', color: 'white', fontFamily: "'DM Sans', sans-serif", width: '18rem', height: '4rem',
                        display: "flex", justifyContent: "center", left: "1.5rem", padding: 0, borderRadius: 50
                    }}>Search Event</Button>
                </div>
                
                <div>
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif" }}>Upcoming Events</h2>

                    <div style={{ display: "flex", overflowX: "hidden", maxWidth: "100%" }} ref={containerRef}>
                        {event.map((event, index) => (
                            <ActionAreaCard
                                key={index}
                                date={event.date}
                                title={event.title}
                                image={event.image}
                                description={event.description}
                            />
                        ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={scrollLeft}><img src="/img/leftbtn.png" alt="left" /></Button>
                        <Button onClick={scrollRight}><img src="/img/rightbtn.png" alt="left" /></Button>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif", marginTop: "5rem" }}>Past Events</h2>

                    <div style={{ marginBottom: "5rem" }}>
                        <div style={{ display: "flex", overflowX: "hidden", maxWidth: "100%" }} ref={containerRef1}>
                            {event.map((event, index) => (
                                <ActionAreaCard
                                    key={index}
                                    date={event.date}
                                    title={event.title}
                                    image={event.image}
                                    description={event.description}
                                />
                            ))}

                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button onClick={scrollLeft1}><img src="/img/leftbtn.png" alt="left" /></Button>
                            <Button onClick={scrollRight1}><img src="/img/rightbtn.png" alt="left" /></Button>
                        </div>
                    </div>
                </div>

            </Container>
            <Footer />
        </div>
    )
}
