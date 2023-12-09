import { Typography } from "@mui/material";
import './EventRibbon.css';



export default function EventRibbon_noBtn  ({ title, date,time, venue, joined,request, rsvpLink ,path})  {
  return (
    <div className="event-ribbon-header">
    <div style={{textAlign:'center', alignItems:'center',fontFamily:'DM Sans, sans-serif',marginLeft:'200px',marginRight:'-200px'}}>
            <Typography variant="h6" style={{fontWeight:'bold',fontSize:'16px',}}>
                Date & Time</Typography>
            <Typography variant="subtitle1" style={{fontSize:'14px'}}>
                {date},{time}</Typography>
    </div>
    <div style={{textAlign:'center', alignItems:'center',fontFamily:'DM Sans, sans-serif',marginLeft:'-100px',marginRight:'-200px',fontSize:'12px'}}>
            <Typography variant="h6" style={{fontWeight:'bold',fontSize:'16px'}}>
                Venue</Typography>
            <Typography variant="subtitle1" style={{fontSize:'14px'}}>
                {venue}</Typography>
    </div>
    <div style={{textAlign:'center', alignItems:'center',fontFamily:'DM Sans, sans-serif',marginLeft:'-100px',marginRight:'-100px',fontSize:'12px'}}>
            <Typography variant="h6" style={{fontWeight:'bold',fontSize:'16px'}}>
            Attendees Request</Typography>
            <Typography variant="subtitle1" style={{fontSize:'14px'}}>
            {request}</Typography>
    </div>
    
    <div style={{textAlign:'center', alignItems:'center',fontFamily:'DM Sans, sans-serif',marginLeft:'-200px',marginRight:'200px',fontSize:'12px'}}>
            <Typography variant="h6" style={{fontWeight:'bold',fontSize:'16px'}}>
                Joined</Typography>
            <Typography variant="subtitle1" style={{fontSize:'14px'}}>
                {joined}</Typography>
    </div>

    </div>
  );
};