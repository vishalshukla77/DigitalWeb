import React from "react";
import abt from "../src/images/about.jpeg";
import Aboutspecific from "./Aboutspecific";

const About = () => {
  return (
    <>
      <Aboutspecific name='ABOUT US' imgsrc={abt}  /> 
    </>
  );
};

export default About;
