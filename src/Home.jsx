import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/web.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
 <Common name='DIGITAL' imgsrc={web} visit='/service' btname="Get started" />
    </>
  );
};

export default Home;
