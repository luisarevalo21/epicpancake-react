import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap/";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { NavLink, Link } from "react-router-dom";
const navbar = props => (
  <Navbar collapseOnSelect expand="md" className="navbar-dark navbar-custom">
    <Logo type="logo" />

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      {/* <Nav>
      <Logo />
    </Nav> */}

      {/* <Navbar.Brand href="/home"> */}
      {/* </Navbar.Brand> */}
      {/* <Nav> */}
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/welcome">Welcome</NavLink> */}
      <Nav>
        {/* <Nav.Link
          exact
          as={NavLink}
          to="/"
          activeStyle={{
            backgroundColor: "white"
          }}
        >
          Home
        </Nav.Link> */}
        <NavItem>
          <NavLink exact to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/welcome">Welcome</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/ex">Ex Gyms</NavLink>
        </NavItem>
        <NavItem>
          <a href="https://www.paypal.me/theepicpancake">Donate</a>
          {/* <NavLink to="https://www.paypal.me/theepicpancake">Donate</NavLink> */}
        </NavItem>
      </Nav>
      {/* <Nav.Link
          to="/welcome"
          activeStyle={{
            backgroundColor: "white"
          }}
        >
          Welcome
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/ex"
          activeStyle={{
            backgroundColor: "white"
          }}
        >
          Ex Gyms
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          target="_blank"
          href="https://www.paypal.me/theepicpancake"
          activeStyle={{
            backgroundColor: "red !important"
          }}
        >
          Donate
        </Nav.Link> */}

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
      {/* </Nav> */}
    </Navbar.Collapse>
  </Navbar>
);

export default navbar;
