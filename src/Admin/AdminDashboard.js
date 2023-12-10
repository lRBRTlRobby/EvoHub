import React, { useState } from 'react';
import AdminHeader from '../Components/adminHeader';
import { Button, Container } from '@mui/material';
import Footer from '../Components/footer';
import AdminEventReqDetails from './AdminEventReqDetails';

export default function Dashboard() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedTableId, setSelectedTableId] = useState(null);

  const textColor = '#8A92A6'; // Define the text color
  const buttonFontSize = '16px'; // Define the button font size
  const buttonWidth = '300px'; // Increase the button width
  const buttonHeight = '100px'; // Adjusted button height for rectangular shape
  const buttonBorderWidth = '0.5px'; // Define the button border width

  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  const handlePrint = () => {
    setIsVisible(false);
    
    setTimeout(() => {
      window.print();
    }, 100);
    setTimeout(() => {
      setIsVisible(true);
    
    }, 100);
  };

  return (
    <div>
      <AdminHeader />
      <img src="./img/GLE-Building.png" alt="logo" className="banner" />
      <Container maxWidth="lg">
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {isVisible && (
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrint}
          style={{ width: '10rem' }}
        >
          Export
        </Button>
      )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginRight: '10px',
              color: textColor,
              backgroundColor: 'white',
              fontSize: buttonFontSize,
              width: buttonWidth,
              height: buttonHeight,
              border: `${buttonBorderWidth} solid black`,
            }}
            onClick={() => setShowDetails(false)}
          >
            4
            <br />
            Total Events
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginRight: '10px',
              color: textColor,
              backgroundColor: 'white',
              fontSize: buttonFontSize,
              width: buttonWidth,
              height: buttonHeight,
              border: `${buttonBorderWidth} solid black`,
            }}
            onClick={() => setShowDetails(false)}
          >
            4
            <br />
            Upcoming Events
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{
              color: textColor,
              backgroundColor: 'white',
              fontSize: buttonFontSize,
              width: buttonWidth,
              height: buttonHeight,
              border: `${buttonBorderWidth} solid black`,
            }}
          >
            4
            <br />
            Past Events
          </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginRight: '10px',
              color: textColor,
              backgroundColor: 'white',
              fontSize: buttonFontSize,
              width: buttonWidth,
              height: buttonHeight,
              border: `${buttonBorderWidth} solid black`,
            }}
            onClick={() => setShowDetails(false)}
          >
            4
            <br />
            Event Requests
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginRight: '10px',
              color: textColor,
              backgroundColor: 'white',
              fontSize: buttonFontSize,
              width: buttonWidth,
              height: buttonHeight,
              border: `${buttonBorderWidth} solid black`,
            }}
            onClick={() => setShowDetails(false)}
          >
            4
            <br />
            Total Users
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginRight: '10px',
              color: textColor,
              backgroundColor: 'white',
              fontSize: buttonFontSize,
              width: buttonWidth,
              height: buttonHeight,
              border: `${buttonBorderWidth} solid black`,
            }}
            onClick={() => setShowDetails(false)}
          >
            4
            <br />
            Total Organizers
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{
              color: textColor,
              backgroundColor: 'white',
              fontSize: buttonFontSize,
              width: buttonWidth,
              height: buttonHeight,
              border: `${buttonBorderWidth} solid black`,
            }}
          >
            4
            <br />
            Organizer Requests
          </Button>
        </div>
        <br /><br />
        {showDetails && (
          <AdminEventReqDetails
            setShowDetails={setShowDetails}
            selectedTableId={selectedTableId}
          />
        )}
      </Container>
      <Footer />
    </div>
  );
}
