import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap/";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { LinkContainer } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
const navbar = props => (
  <Navbar collapseOnSelect expand="md" className="navbar-dark navbar-custom">
    <Logo />

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      {/* <Nav>
      <Logo />
    </Nav> */}

      {/* <Navbar.Brand href="/home"> */}
      {/* </Navbar.Brand> */}
      <Nav style={{ color: "red" }}>
        {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/welcome">Welcome</NavLink> */}
        <NavLink
          as={NavLink}
          exact
          to="/"
          activeStyle={{
            backgroundColor: "white"
          }}
        >
          Home
        </NavLink>
        <NavLink
          as={NavLink}
          to="/welcome"
          activeStyle={{
            backgroundColor: "white"
          }}
        >
          Welcome
        </NavLink>
        <NavLink
          as={NavLink}
          to="/ex"
          activeStyle={{
            backgroundColor: "white"
          }}
        >
          Ex Gyms
        </NavLink>
        <NavLink
          target="_blank"
          href="https://www.paypal.me/theepicpancake"
          activeStyle={{
            backgroundColor: "red !important"
          }}
        >
          Donate
        </NavLink>
        {/* <Nav.Link
          as={NavLink}
          to="https://www.paypal.me/theepicpancake"
          activeStyle={{
            backgroundColor: "white"
          }}
          target="_blank"
        >
          Donate
        </Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbar;
