import { Box, Button, Paper, Typography } from "@mui/material";
import './EventRibbon.css';


const EventRibbon = ({ title, date, venue, joined, rsvpLink }) => {
  return (
    <div className="event-ribbon-header">
    <div style={{textAlign:'center', alignItems:'center',fontFamily:'DM Sans, sans-serif',marginLeft:'100px',marginRight:'-100px'}}>
            <Typography variant="h6" style={{fontWeight:'bold',fontSize:'16px',}}>
                Date & Time</Typography>
            <Typography variant="subtitle1" style={{fontSize:'14px'}}>
                December 05, 2023, 1:00 PM - 4:00 PM</Typography>
    </div>
    <div style={{textAlign:'center', alignItems:'center',fontFamily:'DM Sans, sans-serif',marginLeft:'-100px',marginRight:'-100px',fontSize:'12px'}}>
            <Typography variant="h6" style={{fontWeight:'bold',fontSize:'16px'}}>
                Venue</Typography>
            <Typography variant="subtitle1" style={{fontSize:'14px'}}>
                Gymnasium</Typography>
    </div>
    <div style={{textAlign:'center', alignItems:'center',fontFamily:'DM Sans, sans-serif',marginLeft:'-100px',marginRight:'50px',fontSize:'12px'}}>
            <Typography variant="h6" style={{fontWeight:'bold',fontSize:'16px'}}>
                Joined</Typography>
            <Typography variant="subtitle1" style={{fontSize:'14px'}}>
                5 RSVP’d</Typography>
    </div>
    <Button class="event-ribbon-rsvp-button">RSVP Now</Button>

    </div>
  );
};