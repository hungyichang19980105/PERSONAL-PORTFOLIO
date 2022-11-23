import { useState } from "react";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
