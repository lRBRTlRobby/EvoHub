import React from 'react'
import Container from '@mui/material/Container';
import PersonPics from "../Components/People"
import { Button } from '@mui/base';
import { style } from '@mui/system';
import ButtonM from '../Components/ButtonMaroon';
import ButtonY from '../Components/ButtonYellow';


export default function AdminOrganReqDetails({ setShowDetails }) {
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
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", margin: "0 auto", padding: "0rem", color: "white", textAlign: "center" }}>User Details</h3>
                </div>

                <div style={{ display: "flex", textAlign: "center", marginRight: "1rem" }}>
                    <img src="./img/Edit.png" alt="Edit" style={{ cursor: "pointer", marginRight: "1rem" }} onClick={() => alert("Accept")} />
                    <img src="./img/Delete.png" alt="Edit" style={{ cursor: "pointer" }} onClick={() => alert("Decline")} />
                </div>

            </div>

            <div style={{ padding: "2rem" }}>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>First Name</p>
                <p style={{ textAlign: 'justify' }}>Robert</p>

                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Middle Name</p>
                <p style={{ textAlign: 'justify' }}>Consistente</p>

                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Last Name</p>
                <p style={{ textAlign: 'justify' }}>Amaba</p>

                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Email Address</p>
                <p style={{ textAlign: 'justify' }}>robert.amaba@cit.edu</p>

                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>User Identification</p>
                <p style={{ textAlign: 'justify' }}>Student</p>

                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Department</p>
                <p style={{ textAlign: 'justify' }}>CCS</p>

                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Organization</p>
                <p style={{ textAlign: 'justify' }}>GDSC</p>

                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Proof of Approval From SAO or Department</p>

                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Message to the Admin for Request of Approval</p>
                <p style={{ textAlign: 'justify' }}>I kindly request your approval for an event organizer to manage future events. I possess the necessary skills and experience
                    to ensure the event's success. Your prompt approval would be greatly appreciated.</p>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
                    <ButtonM name="Accept" />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ButtonY name="Decline" />
                </div>
            </div>
            {/* </Container> */}
        </div>
    )
}
