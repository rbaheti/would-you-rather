import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";

class NavBar extends Component {

  render() {

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">New Question</Nav.Link>
            <Nav.Link href="#pricing">Leader Board</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
