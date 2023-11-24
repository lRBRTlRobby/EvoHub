import { Button } from '@mui/material'
import React from 'react'

export default function EventReq() {
  return (
    <div>
        <div style={{ position: 'relative', display: "flex", justifyContent: "center", height: '100%', width: '100%', margin: "0 auto", padding: 0 }}>
                <img style={{ minWidth: '100%', minHeight: '20vw', objectFit: 'cover', marginTop: 0}} src="/img/eventreq.jpg" alt="logo" className='logo' />
                <Button sx={{
                    backgroundColor: '#EAA021', color: 'white', fontFamily: "'DM Sans', sans-serif", width: '19rem', height: '4rem', fontWeight: 'bold', fontFamily: "'DM Sans', sans-serif", fontSize: '1rem',
                    display: "flex", justifyContent: "center", padding: 0, borderRadius: 50, zIndex: 2, position: 'absolute', top: '78%', left: '67.5%', transform: 'translate(-50%, -50%)'
                }}>Create an Event</Button>
            </div>
    </div>
  )
}
