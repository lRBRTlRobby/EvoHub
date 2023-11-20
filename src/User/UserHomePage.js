import React, { useRef } from 'react'
import ResponsiveAppBar from '../Components/header'
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


export default function UserHomePage() {
    const containerRef = useRef(null);
    const containerRef1 = useRef(null);



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

    const events = [
        { date: "Sep 04", title: "CIT-U Info Session 2022", image: "/img/doggo.jpg", description: "Doggo and puppy" },
        { date: "Sep 04", title: "TechXperience 2023", image: "/img/account.png", description: "Doggo and puppy" },
        { date: "Sep 04", title: "Summer Camp", image: "/img/organreq.jpg", description: "Doggo and puppy" },
        { date: "Sep 04", title: "School Night", image: "/img/engineering.png", description: "Doggo and puppy" },
        { date: "Sep 04", title: "Hello World", image: "/img/Joined.jpg", description: "Doggo and puppy" },
        { date: "Sep 04", title: "Goodbye World", image: "/img/ccs.png", description: "Doggo and puppy" },
        { date: "Sep 04", title: "CIT-U Info Session 2022", image: "/img/doggo.jpg", description: "Doggo and puppy" },
        { date: "Sep 04", title: "TechXperience 2023", image: "/img/account.png", description: "Doggo and puppy" },
        { date: "Sep 04", title: "Summer Camp", image: "/img/organreq.jpg", description: "Doggo and puppy" },
        { date: "Sep 04", title: "School Night", image: "/img/engineering.png", description: "Doggo and puppy" },
        { date: "Sep 04", title: "Hello World", image: "/img/Joined.jpg", description: "Doggo and puppy" },
        { date: "Sep 04", title: "Goodbye World", image: "/img/ccs.png", description: "Doggo and puppy" }

    ];

    return (
        <div>
            <ResponsiveAppBar />
            <LandingPage />
            <Container maxWidth="lg" sx={{ marginBottom: "5rem" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ fontFamily: "'DM Sans', sans-serif" }}>Browse Event Categories</h2>
                        <Link to = "/UserEventCategory"><Button sx={{ padding: "0" }}><h4>View All</h4></Button></Link>
                    </div>
                    <div style={{ display: "flex", overflowX: "hidden", maxWidth: "100%" }} ref={containerRef}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button><img className='catbtn' src="/img/Engineering.png" /></Button>
                            <Button><img className='catbtn' src="/img/ccs.png" /></Button>
                            <Button><img className='catbtn' src="/img/arts.png" /></Button>
                            <Button><img className='catbtn' src="/img/account.png" /></Button>
                            <Button><img className='catbtn' src="/img/nursing.png" /></Button>
                            <Button><img className='catbtn' src="/img/crim.png" /></Button>

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
                        <Link to = "/UserPopularEvents"><Button sx={{ padding: "0" }}><h4>View All</h4></Button></Link>
                    </div>
                    <div style={{ marginBottom: "5rem" }}>
                        <div style={{ display: "flex", overflowX: "hidden", maxWidth: "100%" }} ref={containerRef1}>
                            {events.map((event, index) => (
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
            <OrganizerReq />
            <CampusVenues />
            <div style={{ marginBottom: "5rem" }}></div>
           
            {/* <AboutUs /> */}
            <div style={{ marginBottom: "5rem" }}></div>
        </div>
    )
}
