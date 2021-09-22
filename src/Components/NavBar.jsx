// this module defines the navigation bar for the top of our BadBank application

// React hook
import { useContext } from "react";

// import the necessary components from React-Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

// context
import { UserContext } from "../App";

function NavBar({ logout }) {

  const { currentUser } = useContext(UserContext);

  return (
    <Navbar className="mb-5" bg="dark" variant="dark" expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink 
              to="/"
              data-tip="Home page of Bad Bank">Bad Bank</NavLink>
          </Nav.Link>
          <Nav.Link href="#/createaccount">Create Account</Nav.Link>
          {!currentUser && <Nav.Link href="#/login">Login</Nav.Link>}
          <Nav.Link href="#/deposit">Deposit</Nav.Link>
          <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
          <Nav.Link href="#/alldata">All Data</Nav.Link>
        </Nav>
        <span className="justify-content-end bg-light">Logged in as mjlorenzo87@gmail.com</span>
        <Button>Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
