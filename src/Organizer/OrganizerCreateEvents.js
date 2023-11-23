import React, { useRef } from "react";
import ResponsiveAppBar from "../Components/header";
import Container from "@mui/material/Container";
import ActionAreaCard from '../Components/eventCard';
import { useState, useEffect } from "react";
import axios from 'axios'

export default function CreateEventForm() {
  

  return (
    <>
      <ResponsiveAppBar />
      <img src="img/popular.jpg" alt="logo"  style={{width:"100%"}} />
      <Container maxWidth="lg">
        
      </Container>
    </>
  );
}
