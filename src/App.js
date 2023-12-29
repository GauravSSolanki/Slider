import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ReactDOM } from "react";
import Navbar from "./cmp/Navbar";

import Home from "./cmp/NavbarLinks/Home";
import About from "./cmp/NavbarLinks/About";
import Contact from "./cmp/NavbarLinks/Contact";
import Address from "./cmp/NavbarLinks/Address";
import Error from "./cmp/NavbarLinks/Error";

import Search from "./cmp/SearchMenu/Search";
import NewSlider from "./cmp/Slider/NewSlider";
import MultiPageForm from "./cmp/MultiPageForm/MultiPageForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/address" element={<Address />} />

        <Route path="/NewSlider" element={<NewSlider />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/MultiPageForm" element={<MultiPageForm />} />
        
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
