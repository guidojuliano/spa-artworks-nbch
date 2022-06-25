import { Navbar } from "react-bootstrap";
import React from "react";
import { GiWoodFrame } from "react-icons/gi";
import "../App.css";
function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="custom-navbar">
      <Navbar.Brand href="/">
        <GiWoodFrame />
        <span>Artworks</span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
