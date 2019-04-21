import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

class NavBar extends Component {
  render() {

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/new">New Question</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/leaderboard">Leader Board</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
