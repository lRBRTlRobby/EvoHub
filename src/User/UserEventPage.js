import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";
import EventRibbon from "../Components/EventRibbon";
import "../Components/EventCatBtn.css";
import Container from '@mui/material/Container';
import React, { useState, useEffect } from 'react';
import ButtonM from "../Components/ButtonMaroon";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UserEventPage() {
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
    <>
      <ResponsiveAppBar />
      <img src="/img/EventPageBanner.png" alt="logo" className="banner" />
      <Container maxWidth="lg">
        <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '32px', marginRight: '600px', marginLeft: '150px' }}>
          {event.title}
        </h2>

        <p style={{ textAlign: 'justify', width: '810px', marginRight: '350px', marginLeft: '150px', fontSize: '20px', textDecoration: 'underline' }}>
          {event.department}
        </p>

        <p style={{ textAlign: 'justify', width: '810px', marginRight: '350px', marginLeft: '150px', fontSize: '18px' }}>
          {event.description}
        </p>
        <br></br>
        <br></br>
        <br></br>
      </Container>
      <EventRibbon path="/UserEventJoinRequest" />
      <Container maxWidth="lg">
        <br />
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>About this event</h2>
          <p style={{ textAlign: 'left', fontSize: '14px' }}>
            {event.description }
          </p>

          <br />
          <br />
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>
            Head Organizer
          </h2>

          <img src="/img/Organizers.png" alt="logo" style={{ marginTop: '10px', marginLeft: '100px', width: '1000px', height: '220px' }} />
          <p style={{ textAlign: 'left', fontSize: '14px' }}>
            {event.organizer}
          </p>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div style={{ marginLeft: '450px' }}>
          <ButtonM name="Contact us" />
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
      <Footer />
    </>
  );
}
