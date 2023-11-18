import { Button, Container, TextField } from '@mui/material'
import React from 'react'

export default function LandingPage() {
  return (
    <div style={{ position: 'relative', display: "flex", justifyContent: "center", height: '100%', width: '100%', margin: "0 auto", padding: 0 }}>
          <div style={{ display: "flex", justifyContent: "center", height: '100%', width: '100%', margin: "0 auto", padding: 0}}>
                <img style={{ minWidth: '100%', minHeight: '35vw', objectFit: 'cover', marginTop: 0 }} src="/img/land.jpg" alt="logo" className='logo' />
            </div>
        <div style={{ backgroundColor: '#C02147', color: 'white', fontFamily: "'DM Sans', sans-serif", width: '68rem', height: '8.5rem', fontWeight: 'bold', fontFamily: "'DM Sans', sans-serif", fontSize: '1rem',
                    display: "flex", justifyContent: "center", alignItems: "center", padding: 0, borderRadius: 50, zIndex: 2, position: 'absolute', top: '86%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <TextField
                        className='txt'
                        id="outlined-password-input"
                        label="Search event here..."
                        type="text"
                        variant='outlined'
                        InputProps={{ sx: { backgroundColor: 'white', height: "5rem" } }}
                        InputLabelProps={{ sx: { position: 'absolute', top: '.2rem' } }}
                        sx={{ margin: "0", padding: 0, width: "38rem", right: "1.5rem" }}
                    /><Button sx={{
                        backgroundColor: '#EAA021', color: 'white', fontFamily: "'DM Sans', sans-serif", width: '18rem', height: '4rem',
                        display: "flex", justifyContent: "center", left: "1.5rem", padding: 0, borderRadius: 50
                    }}>Search Event</Button>
                </div>
    </div>
  )
}
