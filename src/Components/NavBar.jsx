import React, {Component} from "react";
import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {Button, Form, Navbar, Nav} from "react-bootstrap";
import {getAvatar} from "../utils/helper";
import {setAuthedUser} from "../actions/authedUser";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null));
    return <Redirect to={"/"} />;
  }

  getRightAlignedItems = () => {
    const {users, authedUser} = this.props;
    if (authedUser === null) {
      return null;
    }

    const user = users[authedUser];
    return <Form inline>
      <div className="pr-3 text-white">
        <img src={getAvatar(user.avatarURL)} width="25" height="22"/> {user.name}
      </div>
      <Button variant="light" onClick={this.handleLogout}>Logout</Button>
    </Form>;
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
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
            {this.getRightAlignedItems()}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  users: state.users,
  authedUser: state.authedUser
});

export default connect(mapSateToProps)(NavBar);
