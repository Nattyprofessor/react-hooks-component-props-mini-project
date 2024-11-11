import React from "react";
import logo from "../assets/logo"; // Assuming you are importing the logo image

function About({ image = logo, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
