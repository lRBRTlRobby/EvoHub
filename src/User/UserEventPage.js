import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";
import EventRibbon from "../Components/EventRibbon";
import "../Components/EventCatBtn.css";
import Container from '@mui/material/Container';
import React, { useState, useEffect } from 'react';
import ButtonM from "../Components/ButtonMaroon";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/system';
import { useUser } from '../Components/UserProvider';
import ParticipantApprove from "../Components/AFeedback";
import ParticipantDecline from "../Components/DFeeback";

export default function UserEventPage() {
  const { user } = useUser();
  const [event, setEvents] = useState({});
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);

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

  useEffect(() => {
    axios.get('http://localhost:8080/participantrequest/getAllParRequests')
      .then(response => {
        // setEvents(response.data);
        const tmpPart = response.data;
        const origPart = tmpPart.find(tmpPar => tmpPar.eventId === eventId || tmpPar.userId === user.userid);
        setParticipants(origPart);
        
      })
      .catch(error => {
        console.error('Error fetching participants:', error);
      });
  }, []);

  return (
    <>
      <ResponsiveAppBar />
    
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
      </div>
      <EventRibbon path={`/UserEventJoinRequest/${eventId}`} />
        <Container maxWidth="lg">
          <br />
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>About this event</h2>
            <p style={{ textAlign: 'left', fontSize: '14px' }}>
              {event.description }
            </p>

            {participants.status === "Accepted"? <><ParticipantApprove /></>: <><ParticipantApprove feedback = "Sorry, your request was not approved."/></>}

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
      <Footer />
    </>
  );
}
