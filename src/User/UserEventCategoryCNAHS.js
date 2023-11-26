import React, { useRef } from 'react'
import ResponsiveAppBar from "../Components/header"
import Container from '@mui/material/Container';
import "./UserEventCategory"
import ActionAreaCard from '../Components/eventCard';
import { Button } from '@mui/material';
import Footer from '../Components/footer';



export default function EventCategoryCNAHS() {
    window.scroll(0, 0);
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
        { date: "Sep 04", title: "CIT-U Info Session 2022", image: "/img/irish.jpg", description: "Doggo and puppy" },
        { date: "Sep 04", title: "TechXperience 2023", image: "/img/robert.png", description: "Doggo and puppy" },
        { date: "Sep 04", title: "Summer Camp", image: "/img/kaye.jpg", description: "Doggo and puppy" },
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
        <>
            <ResponsiveAppBar />
            <img src="img/cnahs_banner.png" alt="logo" className="banner" />
            <Container maxWidth="lg">
                <div >
                    <h1 style={{ fontFamily: "'DM Sans', sans-serif" }}>College of Computer Studies</h1>
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif",fontSize:'30px' }}>Upcoming Events</h2>

                </div>
                <div>

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
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif", marginTop: "5rem" ,fontSize:'30px'}}>Past Events</h2>

                    <div style={{ marginBottom: "5rem" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", overflowX: "auto" , alignItemsL:"center", justifyContent: "center"}}>
                            {events.map((event, index) => (
                                <div key={index} style={{  boxSizing: "border-box" }}>
                                    <ActionAreaCard
                                        date={event.date}
                                        title={event.title}
                                        image={event.image}
                                        description={event.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        
        <Footer/>
        </>
    )
}