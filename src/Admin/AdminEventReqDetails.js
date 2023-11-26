import React from 'react'
import Container from '@mui/material/Container';
import PersonPics from "../Components/People"


export default function AdminEventReqDetails() {
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
        <div>
            {/* <Container maxWidth="lg"> */}
                <img src="./img/Techxperience2.png" alt="logo" className="banner" />
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

                <div style={{ backgroundColor: '#f5f5f5', borderRadius: '20px',marginBottom: '1rem', width: '30%', padding: '1rem' }}>
                    <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Requestor Information:</p>
                    <p style={{ fontWeight: 'bold' }}>First Name: Jane</p>
                    <p style={{ fontWeight: 'bold' }}>Middle Name: Joe</p>
                    <p style={{ fontWeight: 'bold' }}>Last Name: Doe</p>
                    <p style={{ fontWeight: 'bold' }}>School Email: jane.doe@cit.edu</p>
                    <p style={{ fontWeight: 'bold' }}>Role: Student</p>
                    <p style={{ fontWeight: 'bold' }}>Department: CCS</p>
                    <p style={{ fontWeight: 'bold' }}>Organization: GDSC</p>
                </div>
            {/* </Container> */}
        </div>
    )
}
