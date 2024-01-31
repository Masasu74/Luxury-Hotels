import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Facilities from "./Components/Facilities/Facilities.jsx";
import Rooms from "./Components/Rooms/Rooms.jsx";
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>
    </>
  );
}

export default App;
