import React, { useRef, useEffect, useState } from 'react'
import ResponsiveAppBarOrgan from '../Components/organHeader'
import LandingPage from '../Components/LandingPage'
import Container from '@mui/material/Container';
import EventCatBtn from '../Components/EventCatBtn';
import { Button, Grid } from '@mui/material';
import ActionAreaCard from '../Components/eventCard';
import OrganizerReq from '../Components/OrganizerReq';
import CampusVenues from '../Components/CampusVenues';
import AboutUs from '../Components/AboutUs';
import Upcoming from '../Upcoming';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';
import PersonProfile from '../User/UserAboutUs';
import axios from 'axios'
import EventReq from '../Components/EventReq';

export default function OrganizerHomePage() {
    const containerRef = useRef(null);
    const containerRef1 = useRef(null);
    const [event, setEvents] = useState([]);
    const currentDate = new Date();

    useEffect(() => {
        axios.get('http://localhost:8080/Event/getAllEvents')
          .then(response => {
            const filteredEvents= response.data.filter(participant => participant.status === 1);
                console.log(filteredEvents)
                // Set the filtered participants
                setEvents(filteredEvents);
                // Set the events if needed
                // setEvents(filteredParticipants);
          })
          .catch(error => {
            console.error('Error fetching events:', error);
          });
      }, []);

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

    return (
        <div>
            <ResponsiveAppBarOrgan />
            <LandingPage />
            <Container maxWidth="lg" sx={{ marginBottom: "5rem" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ fontFamily: "'DM Sans', sans-serif" }}>Browse Event Categories</h2>
                        <Link to = "/UserEventCategory" style={{textDecoration:'none'}}><Button sx={{ padding: "0" }}><h4>View All</h4></Button></Link>
                    </div>
                    <div style={{ display: "flex", overflowX: "hidden", maxWidth: "100%" }} ref={containerRef}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Link to="/OrganizerEventCategoryCEA"><Button><img className='catbtn' src="/img/Engineering.png" /></Button></Link>
                            <Link to="/OrganizerEventCategoryCCS"><Button><img className='catbtn' src="/img/ccs.png" /></Button></Link>
                            <Link to="/OrganizerEventCategoryCASE"><Button><img className='catbtn' src="/img/arts.png" /></Button></Link>
                            <Link to="/OrganizerEventCategoryCMBA"><Button><img className='catbtn' src="/img/account.png" /></Button></Link>
                            <Link to="/OrganizerEventCategoryCNAHS"><Button><img className='catbtn' src="/img/nursing.png" /></Button></Link>
                            <Link to="/OrganizerEventCategoryCCJ"><Button><img className='catbtn' src="/img/crim.png" /></Button></Link>

                        </div>

                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={scrollLeft}><img src="/img/leftbtn.png" alt="left" /></Button>
                        <Button onClick={scrollRight}><img src="/img/rightbtn.png" alt="left" /></Button>
                    </div>

                </div>

                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ fontFamily: "'DM Sans', sans-serif" }}>Popular Events</h2>
                        <Link to = "/UserPopularEvents"  style={{textDecoration:'none'}}><Button sx={{ padding: "0" }}><h4>View All</h4></Button></Link>
                    </div>
                    <div style={{ marginBottom: "5rem" }}>
                        <div style={{ display: "flex", overflowX: "hidden", maxWidth: "100%" }} ref={containerRef1}>
                            {event.map((event, index) => (
                                <div
                                    key={index}
                                    style={{
                                    boxSizing: "border-box",
                                    padding: ".5rem",
                                    }}
                                >
                                    {/* Conditional rendering based on event date */}
                                    {new Date(event.date) > currentDate && (
                                    <Link to={`/OrganizerEventPage/${event.eventid}`} style={{textDecoration: "none"}} >
                                        <ActionAreaCard
                                        key={index}
                                        date={event.date}
                                        title={event.title}
                                        image={"/uploads/" + event.image}
                                        description={event.description}
                                        />
                                    </Link>
                                    )}
                                </div>
                                ))}

                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button onClick={scrollLeft1}><img src="/img/leftbtn.png" alt="left" /></Button>
                            <Button onClick={scrollRight1}><img src="/img/rightbtn.png" alt="left" /></Button>
                        </div>
                    </div>
                </div>
            </Container>
            <EventReq />
            <CampusVenues />
            <div style={{ marginBottom: "5rem" }}></div>
           
            {/* <AboutUs /> */}
            <PersonProfile />
            <div style={{ marginBottom: "5rem" }}></div>
            <Footer />
        </div>
    )
}
