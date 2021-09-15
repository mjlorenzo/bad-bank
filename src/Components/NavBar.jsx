// this module defines the navigation bar for the top of our BadBank application

// import the necessary components from React-Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar variant="dark" bg="dark" expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Bad Bank</Nav.Link>
          <Nav.Link href="#/login">Login</Nav.Link>
          <Nav.Link href="#/deposit">Deposit</Nav.Link>
          <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
          <Nav.Link href="#/balance">Balance</Nav.Link>
          <Nav.Link href="#/alldata">All Data</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
