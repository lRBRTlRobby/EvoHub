import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";
import EventRibbon from "../Components/EventRibbon";
import "../Components/EventCatBtn.css";
import Container from '@mui/material/Container';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useUser } from '../Components/UserProvider';
import ParticipantApprove from "../Components/AFeedback";
import ParticipantDecline from "../Components/DFeeback";

export default function UserEventPage() {
  const { user } = useUser();
  const [event, setEvents] = useState({});
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [participantCount, setParticipantCount] = useState([]);

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
        console.log("tmpPart: ", tmpPart);
        console.log("TMPeventId: ", tmpPart.eventId);
        const origPart = tmpPart.find(tmpPar => tmpPar.eventId == eventId && tmpPar.userId === user.userid && tmpPar.status !== null);
        console.log("EventId: ", eventId);
        setParticipants(origPart);
        console.log("origPart: ", origPart);

      })
      .catch(error => {
        console.error('Error fetching participants:', error);
      });
  }, [user.userid, eventId]);


  useEffect(() => {
    axios.get('http://localhost:8080/participantrequest/getAllParRequests')
      .then(response => {
        // setEvents(response.data);
        const tmpPart = response.data;
        console.log("tmpPart: ", tmpPart);
        console.log("TMPeventId: ", tmpPart.eventId);
        const origPart = tmpPart.filter(tmpPar => tmpPar.eventId == eventId && tmpPar.status === 'Accepted');
        console.log("EventId: ", eventId);
        // Use this for the count, participantCount.length
        setParticipantCount(origPart);
        console.log("origPartCount1: ", origPart);
        console.log("origPartCount: ", origPart.length);

      })
      .catch(error => {
        console.error('Error fetching participants:', error);
      });
  }, [eventId]);

  return (
    <>
      <ResponsiveAppBar />

      <div style={{ backgroundImage: `url('/img/sheer.png')`, backgroundSize: 'cover', minHeight: '10vh' }}>
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
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '32px', marginRight: '600px', marginLeft: '150px' }}>
            {event.title}
          </h2>

          <p style={{ textAlign: 'justify', width: '810px', marginRight: '350px', marginLeft: '150px', fontSize: '20px', textDecoration: 'underline' }}>
            Cebu Institute of Technology - University
          </p>

          <p style={{ textAlign: 'justify', width: '810px', marginRight: '350px', marginLeft: '150px', fontSize: '18px' }}>
            {event.department === 'None' ? 'Open to every department' : `This event is exclusively for ${event.department} college students.`}
            <br />
            {event.yearlevel === 0 ? 'Open to all levels! Join us for a fantastic time!' : `This event is exclusively for ${event.yearlevel}th year  college students.`}
            <br />
            {event.payment === 'No' ? "Complimentary attendance—no payment required." : "Please note that payment is required for participation."}
          </p>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </div>
      <EventRibbon
        location={event.location}
        time={event.time}
        date={event.date}
        joined={participantCount.length}
        path={`/UserEventJoinRequest/${eventId}`} />
      <Container maxWidth="lg">
        <br />
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', textAlign: 'left' }}>About this event</h2>
          <p style={{ textAlign: 'left' }}>
            {event.description}
          </p>

          {participants ? <>{participants.status === "Accepted" ? <><ParticipantApprove /></> : <><ParticipantDecline feedback="Sorry, your request was not approved." /></>}</> : <></>}
          {/* {participants.status === "Accepted"? <><ParticipantApprove /></>: <><ParticipantApprove feedback = "Sorry, your request was not approved."/></>} */}

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
        {/* <div style={{ marginLeft: '450px' }}>
            <ButtonM name="Contact us" />
          </div> */}

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
