import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "../CSS/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
    <nav className="navbar ">
      <div className="navbar__logo">
        <Link to="/">ALCC</Link>
      </div>

      <div className={`navbar__links ${isOpen ? "open" : ""}`}>
        <Link to="/teampage">Team</Link>
        <Link to="/EventsPage">Events</Link>
        <Link to="/projectspage">Projects</Link>
        <Link to="/ChallengesPage">Challenges</Link>
        <Link to="/Membershipage">Join Us !</Link>
      </div>

      <div className="navbar__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
