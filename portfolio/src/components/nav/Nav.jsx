import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav className="container">
      <Link
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : "links"}
        to="/"
      >
        About
      </Link>
      <Link
        onClick={() => setActive("#work")}
        className={active === "#work" ? "active" : "links"}
        to="/work"
      >
        Work
      </Link>
      <Link
        onClick={() => setActive("#skills")}
        className={active === "#skills" ? "active" : "links"}
        to="/skills"
      >
        Skills
      </Link>
      <Link
        onClick={() => setActive("#project")}
        className={active === "#project" ? "active" : "links"}
        to="/project"
      >
        Projects
      </Link>
      <Link
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : "links"}
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
