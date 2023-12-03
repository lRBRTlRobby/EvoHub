import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";
import EventRibbon from "../Components/EventRibbon";
import Container from '@mui/material/Container';
import ButtonM from "../Components/ButtonMaroon";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EventRibbon_noBtn from '../Components/EventRibbon_noBtn';
import GreySheer from '../Components/deletePopUp';
import ResponsiveAppBarOrgan from '../Components/organHeader';

export default function EventDetails() {
  const [event, setEvents] = useState({});
  const [showDeletePopup, setShowDeletePopup] = useState(false);
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

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  return (
    <div>
      <ResponsiveAppBarOrgan />
      <div style={{ background: '#C02147', height: '85px', display: 'flex', justifyContent: 'flex-end' }}>
        <button>join</button>
        <button>requests</button>
        <button onClick={handleDeleteClick}>delete</button>
        <button>edit</button>
      </div>

      <Container maxWidth="lg">
        <br />
        <br />
        <br />

        <img src={"/uploads/" + event.image} alt="here"
          style={{
            width: '100%',
            height: "500px",
            borderRadius: '45px', // Adjust the radius as needed
            display: 'block',
            margin: 'auto',
          }}
        />
        <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '32px', marginRight: '600px', marginLeft: '150px' }}>{event.title}</h3>
        <p style={{ textAlign: 'justify', width: '810px', marginRight: '350px', marginLeft: '150px', fontSize: '20px', textDecoration: 'underline' }}>Cebu Institute of Technology</p>
      </Container>
      <br></br>
      <br></br>
      <div>
        <EventRibbon_noBtn date={event.date} time={event.time} venue={event.location} />
      </div>
      <br></br>
      <br></br>
      <Container maxWidth="lg">
        <br />
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>About this event</h2>
          <p style={{ textAlign: 'left', fontSize: '14px' }}>
            {event.description}
          </p>

          <br />
          <br />
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>
            Head Organizer
          </h2>


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

      {showDeletePopup && <GreySheer />}
      <Footer />
    </div>
  );
}
