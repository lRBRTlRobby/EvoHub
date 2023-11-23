import React, { useRef } from 'react'
import ResponsiveAppBar from '../Components/header'
import Container from '@mui/material/Container';
import { Button, TextField } from '@mui/material';
import ActionAreaCard from '../Components/eventCard';
import Footer from '../Components/footer';
import ResponsiveAppBarOrgan from '../Components/organHeader';
export default function OrganizerJoinedEvents() {
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
                        <Button onClick={scrollLeft}><img src="/img/leftbtn.png" alt="left" /></Button>
                        <Button onClick={scrollRight}><img src="/img/rightbtn.png" alt="left" /></Button>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif", marginTop: "5rem" }}>Past Events</h2>

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
            <Footer />
        </div>
    )
}
