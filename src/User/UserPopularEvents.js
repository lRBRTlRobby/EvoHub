import React, { useRef } from "react";
import ResponsiveAppBar from "../Components/header";
import Container from "@mui/material/Container";
import ActionAreaCard from '../Components/eventCard';

export default function UserPopularEvents() {
  const containerRef = useRef(null);
  const containerRef1 = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  const scrollLeft1 = () => {
    if (containerRef1.current) {
      containerRef1.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };
  const scrollRight1 = () => {
    if (containerRef1.current) {
      containerRef1.current.scrollLeft += 300;
    }
  };

  const events = [
    {
      date: "Sep 04",
      title: "CIT-U Info Session 2022",
      image: "/img/crab.jpg",
      description: "Mr. Bean squared",
    },
    {
      date: "Sep 04",
      title: "TechXperience 2023",
      image: "/img/info.jpg",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "Summer Camp",
      image: "/img/sess.jpg",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "School Night",
      image: "/img/engineering.png",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "Hello World",
      image: "/img/Joined.jpg",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "Goodbye World",
      image: "/img/ccs.png",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "CIT-U Info Session 2022",
      image: "/img/doggo.jpg",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "TechXperience 2023",
      image: "/img/account.png",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "Summer Camp",
      image: "/img/organreq.jpg",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "School Night",
      image: "/img/engineering.png",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "Hello World",
      image: "/img/Joined.jpg",
      description: "Doggo and puppy",
    },
    {
      date: "Sep 04",
      title: "Goodbye World",
      image: "/img/ccs.png",
      description: "Doggo and puppy",
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <img src="img/popular.jpg" alt="logo" />
      <Container maxWidth="lg">
        <div>
          <h2
            style={{ fontFamily: "'DM Sans', sans-serif", marginTop: "5rem" }}
          >
            Popular Events
          </h2>

          <div style={{ marginBottom: "5rem" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                overflowX: "auto",
                alignItemsL: "center",
                justifyContent: "center",
              }}
            >
              {events.map((event, index) => (
                <div
                  key={index}
                  style={{
                    // flex: "0 0 25%",
                    boxSizing: "border-box",
                    padding: ".5rem",
                  }}
                >
                  <ActionAreaCard
                    date={event.date}
                    title={event.title}
                    image={event.image}
                    description={event.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
