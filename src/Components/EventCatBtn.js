import { Button } from '@mui/material'
import React from 'react'
import './EventCatBtn.css'
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


export default function EventCatBtn() {
  return (
    <Container maxWidth="lg">
    <div className='EventCatBtn'>
        <h2 style={{fontFamily: "'DM Sans', sans-serif"}}>Event Categories</h2>
        {/* <div className='cateventbtn' style={{display: "block", justifyContent: "center"}}> */}
        <div className='cateventbtn' style={{display: "block", justifyContent: "center"}}>
        <Button><img className='catbtn' src="/img/Engineering.png" /></Button>
        <Link to="/EventCategoryIdea"><Button><img className='catbtn' src="/img/ccs.png" /></Button></Link>
        <Button><img className='catbtn' src="/img/arts.png" /></Button>
        <Button><img className='catbtn' src="/img/account.png" /></Button>
        <Button><img className='catbtn' src="/img/nursing.png" /></Button>
        <Button><img className='catbtn' src="/img/crim.png" /></Button>
        </div>
    </div>
    </Container>
  )
}
