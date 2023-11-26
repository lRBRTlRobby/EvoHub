import React from 'react'
import Container from '@mui/material/Container';
import PersonPics from "../Components/People"
import { Button } from '@mui/base';
import { style } from '@mui/system';
import ButtonM from '../Components/ButtonMaroon';
import ButtonY from '../Components/ButtonYellow';


export default function AdminEventReqDetails({ setShowDetails }) {
    const Developers = [
        {
            image: "./img/Profile-3.png",
            name: "Robert Amaba",
            role: "Finance Manager"

        },
        {
            image: "/img/Profile-1.png",
            name: "Irish Leigh San Juan",
            role: "Public Relations Officier"

        }, {
            image: "/img/Profile-2.png",
            name: " Katrina Dela Pena",
            role: "Event Coordinator"

        }, {
            image: "/img/Profile.png",
            name: "Kyle Weig",
            role: "Logistics Coordinator"

        }

    ]
    return (
        <div style={{ border: "1px solid black", marginTop: "1rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", }}>
            {/* <Container maxWidth="lg"> */}
            <div style={{ backgroundColor: '#C02147', paddingTop: "1rem", paddingBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "2rem" }}>
                <div>
                    <img className='back' src="/img/back.png" style={{ cursor: "pointer", marginLeft: "1rem" }} onClick={() => setShowDetails(false)} />
                </div>

                <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", margin: "0 auto", padding: "0rem", color: "white", textAlign: "center" }}>Event Details</h3>
                </div>

                <div style={{ display: "flex", textAlign: "center", marginRight: "1rem" }}>
                    <img src="./img/Edit.png" alt="Edit" style={{ cursor: "pointer", marginRight: "1rem" }} onClick={() => alert("Accept")} />
                    <img src="./img/Delete.png" alt="Edit" style={{ cursor: "pointer" }} onClick={() => alert("Decline")} />
                </div>

            </div>

            <img src="./img/Techxperience2.png" alt="logo" className="banner" style={{ width: "80%", height: "auto", display: "flex", margin: "0 auto" }}/>

            <div style={{ padding: "2rem" }}>
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", marginTop: "5rem" }}>Innovation Expo 2023</h2>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Event Details</p>
                <p style={{ textAlign: 'justify' }}>This event is set to be a game-changer as it brings together the brightest minds and the boldest ideas in the world of innovation developed by our very own
                    Wildcat Innovation Labs Incubates. Don't miss this oppurtuinity to witness the future today!</p>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Date & Time</p>
                <p style={{ textAlign: 'justify' }}>December 05, 2023 1:00 PM to 4:00 PM</p>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Location</p>
                <p style={{ textAlign: 'justify' }}>Gymnasium </p>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold', marginTop: "2rem" }}>Organizers</p>

                <div style={{ display: "flex", padding: "0", margin: "0", justifyContent: "space-between" }}>
                    {Developers.map((developer, index) => (
                        <div style={{ textAlign: "center", margin: "50px" }}>
                            <img src={developer.image} alt="logo" style={{ width: "100px" }} />
                            <h3>{developer.name}</h3>
                            <p>{developer.role}</p>
                        </div>
                    ))}

                </div>

                <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
                    <div>
                        <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Required Year Level</p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif" }}>None</p>
                    </div>
                    <div>
                        <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Required Department</p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif" }}>CSS</p>
                    </div>

                    <div>
                        <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Required Payment</p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif" }}>Yes</p>
                    </div>

                    <div>
                        <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Maximum Attendees</p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif" }}>300</p>
                    </div>
                </div>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Proof of Approval From SAO or Department</p>

                <div style={{ backgroundColor: '#f5f5f5', borderRadius: '20px', marginBottom: '1rem', width: '30%', padding: '1rem' }}>
                    <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Requestor Information:</p>
                    <p style={{ fontWeight: 'bold' }}>First Name: Jane</p>
                    <p style={{ fontWeight: 'bold' }}>Middle Name: Joe</p>
                    <p style={{ fontWeight: 'bold' }}>Last Name: Doe</p>
                    <p style={{ fontWeight: 'bold' }}>School Email: jane.doe@cit.edu</p>
                    <p style={{ fontWeight: 'bold' }}>Role: Student</p>
                    <p style={{ fontWeight: 'bold' }}>Department: CCS</p>
                    <p style={{ fontWeight: 'bold' }}>Organization: GDSC</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                    <ButtonM name="Accept" />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ButtonY name="Decline" />
                </div>
            </div>
            {/* </Container> */}
        </div>
    )
}