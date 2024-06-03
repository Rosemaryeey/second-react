import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Nav from "./nav";
import Home from "./home";
import Contact from "./contact";
import Services from "./services";
import Work from "./work";
import Banner from "./banner"

function App() {
  return (
    <div className=" bg-[#080808]  text-white  ">
      <section className=" flex flex-col justify-between items-center">
        <Header />
        {/* <div className="flex items-center justify-center">
          <h1 data-text="I AM A WEB DEVELOPER">I AM A WEB DEVELOPER</h1>
        </div> */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Home/>
        <Work />
        <Services />
        <Contact />
      </section>
    </div>
  );
}

export default App;
