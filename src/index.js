import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Event from './Login/LoginRegister';
import EventRegister from './Login/UserRegister';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import EventUser from './Login/UserLogin';
import EventUserHome from './EventUserHome';
import EventCatBtn from './Components/EventCatBtn';
import ResponsiveAppBar from './Components/header';
import ResponsiveAppBarOrgan from './Components/organHeader';
import EventOrganizer from './Login/OrganizerLogin';
import EventAdmin from './Login/AdminLogin';
import ActionAreaCard from './Components/eventCard';
import EventCategory from './User/UserEventCategory';
import Upcoming from './Upcoming';
import Popular from './Popular';
import JoinedEvents from './User/UserJoinedEvents';
import OrganizerReq from './Components/OrganizerReq';
import LandingPage from './Components/LandingPage';
import BackButton from './BackButton';
import UserHomePage from './User/UserHomePage';
import UserAboutUs from './User/UserAboutUs';
import UserUpcomingEvents from './User/UserUpcomingEvents';
import UserPopularEvents from './User/UserPopularEvents';
import PersonProfile from './User/UserAboutUs';
import UserEventJoinRequest from './User/UserEventJoinRequest';
import Footer from './Components/footer';
import OrganizerHomePage from './Organizer/OrganizerHomePage';
import OrganizerJoinedEvents from './Organizer/OrganizerJoinedEvents';
import ApplicationForm from './Organizer/OrganizerApplicationForm';
import UserProfile from './User/UserProfile';
import UserEventPage from './User/UserEventPage';
import EventCategoryCCS from './User/UserEventCategoryCCS';
import UserProfileEdit from './User/UserProfileEdit';
import EventCategoryCEA from './User/UserEventCategoryCEA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
      <BrowserRouter>

      <Routes>
      <Route path="/" element={<Event />} />
      <Route path="/EventRegister" element={<EventRegister />} />
      <Route path="/EventUser" element={<EventUser />} />
      <Route path="/EventOrganizer" element={<EventOrganizer />} />
      <Route path="/EventAdmin" element={<EventAdmin />} />
      <Route path="/EventUserHome" element={<UserHomePage/>} />
      <Route path="/UserJoinedEvents" element={<JoinedEvents />} />
      <Route path="/UserAboutUs" element={<PersonProfile/>} />
      <Route path="/UserUpcomingEvents" element={<UserUpcomingEvents />} />
      <Route path="/UserPopularEvents" element={<UserPopularEvents />} />
      <Route path="/UserEventCategory" element={<EventCategory/>} />
      <Route path="/UserEventJoinRequest" element={<UserEventJoinRequest />} />
      <Route path="/OrganizerHomePage" element={<OrganizerHomePage />} />
      <Route path="/OrganizerJoinedEvents" element={<OrganizerJoinedEvents />} />
      <Route path="/OrganizerAppllicationForm" element={<ApplicationForm />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/UserProfileEdit" element={<UserProfileEdit />} />
      <Route path="/UserEventPage" element={<UserEventPage />} />
      <Route path="/UserEventJoinRequest" element={<UserEventJoinRequest />} />
      <Route path="/EventCategoryCCS" element={<EventCategoryCCS />} />
      <Route path="/EventCategoryCEA" element={<EventCategoryCEA />} />
      </Routes>

{/* <Footer /> */}
{/* <JoinedEvents /> */}
{/* <ResponsiveAppBar /> */}
{/* <ResponsiveAppBar /> */}
{/* <EventCategory /> */}
{/* <EventCatBtn /> */}
{/* <ActionAreaCard /> */}
{/* <Upcoming /> */}
{/* <Popular /> */}
{/* <BackButton /> */}
{/* <OrganizerReq /> */}
{/* <LandingPage /> */}


{/* <UserHomePage /> */}
{/* <JoinedEvents /> */}

  
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


