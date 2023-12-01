import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";
import EventRibbon from "../Components/EventRibbon";
import Container from '@mui/material/Container';
import ButtonM from "../Components/ButtonMaroon";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EventDetails(){
    const [event, setEvents] = useState({});
  const { eventId } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
        axios.get(`http://localhost:8080/Event/getEvent/${eventId}`)
      .then(response => {
        console.log(response.data)
        setEvents(response.data);

       
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, [eventId]);

    return (
        <div style={{ backgroundImage: `url('/img/sheer.png')`, backgroundSize: 'cover', minHeight: '10vh' }}>
        <Container maxWidth="lg">
          <br/>
          <br/>
          <br/>

        <img  src={"/uploads/" + event.image} alt="here" 
          style={{ width: '100%',
          height:"500px",
          borderRadius: '45px', // Adjust the radius as needed
          display: 'block',
          margin: 'auto',
         }} 
        />
                <h3 style={{ fontFamily:'DM Sans, sans-serif', fontSize:'32px', marginRight:'600px', marginLeft:'150px' }}>2023 - Explore, Learn, Innovate!</h3>
                <p style={{ textAlign:'justify', width:'810px', marginRight:'350px', marginLeft:'150px', fontSize:'20px', textDecoration: 'underline' }}>Cebu Institute of Technology</p>
            </Container>
            <br></br>
            <br></br>
            <div>
                <EventRibbon />
            </div>
            <br></br>
            <br></br>
            <Container maxWidth="lg">
                <div style={{ textAlign:"center" }}>
                    <h2 style={{ fontFamily:'DM Sans, sans-serif', marginLeft:"-700px" }}>About this event</h2>
                    <p style={{ textAlign:'justify', width:'810px', fontSize:'14px', marginLeft:"60px" }}>
                        Are you ready to embark on a journey of technological discovery? Join us for TechXperience 2023, 
                        a dynamic event that brings together the brightest minds and innovators in the world of technology.
                        Whether you’re a tech enthusiast, a seasoned professional, or just curious about the latest tech trends,
                        this event is designed to empower and inspire.
                    </p>
                </div>
                <br/>
                <br></br>
                {/* ...Other content... */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <img src="img/OrganizerKat.png" alt="OrganizerKat" style={{ marginRight: '150px' }} />
                    <ButtonM name="Contact us" style={{ marginRight: '100px' }} />
                </div>
                <br></br>
                <br></br>     
                {/* ...Other content... */}
            </Container>
            <Footer/>
        </div>
    )
}
