import React from "react";
import ResponsiveAppBar from "../Components/header";
import EventCatBtn from "../Components/EventCatBtn";
import "../EventCategory/UserEventCategory.css";
import "../Components/EventCatBtn.css";
import Footer from "../Components/footer";
import "./OrganizerApplicationForm.css";

export default function OrganizerEventCategory() {
  return (
    <>
      <ResponsiveAppBar />
      <img src="./img/EventBanner.png" alt="logo" className="banner" />
      <EventCatBtn />
      <Footer />
    </>
  );
}
