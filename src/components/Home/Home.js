import React from "react";
import Agents from "../Agents/Agents";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Services from "../Services/Services";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Services></Services>
      <Agents></Agents>
      <Contact></Contact>
    </>
  );
};

export default Home;
