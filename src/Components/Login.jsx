import React, {Component} from "react";
import {connect} from "react-redux";
import {Form, Button, Card} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import {Redirect} from "react-router-dom";

import {setAuthedUser} from "../actions/authedUser";
import {getAvatar} from "../utils/helper";
import logo from "../images/logo.jpg";

class Login extends Component {

  state = {
    selectedUserId: null,
    option1: "",
    option2: ""
  }

  onSelect = eventKey => {
    this.setState({
      selectedUserId: eventKey
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.selectedUserId === null) {
      return null;
    }

    this.props.dispatch(setAuthedUser(this.state.selectedUserId));
    return <Redirect to={"/home"} />;
  }

  getDropdownToggle = () => {
    if (this.state.selectedUserId === null) {
      return <Dropdown.Toggle variant="light" id="dropdown-basic" block>Select User</Dropdown.Toggle>;
    }
    const user = this.props.users[this.state.selectedUserId];
    return <Dropdown.Toggle variant="light" id="dropdown-basic" block>
      <img src={getAvatar(user.avatarURL)} width="25" height="22"/> {user.name}
    </Dropdown.Toggle>;
  }

  render() {
    const {users} = this.props;
    if (users === undefined) {
      return null;
    }

    const usersArr = Object.values(this.props.users);
    return (
      <div>
        <Card style={{width: "30rem"}} className="m-3">
          <Card.Body>
            <div className="p-2 text-center">
              <Card.Title>Welcome to the Would You Rather App!</Card.Title>
              <p>Please sign in to continue</p>
            </div>
            <div className="p-3 text-center">
              <img src={logo} width="250" height="220"/>
            </div>
            <Form>
              <Form.Group controlId="userDropdown">
                <Dropdown onSelect={this.onSelect}>
                  {this.getDropdownToggle()}

                  <Dropdown.Menu>
                    {usersArr.map(user => 
                      <Dropdown.Item eventKey={user.id} key={user.id}>
                        <img src={getAvatar(user.avatarURL)} width="25" height="22"/> {user.name} 
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>  
              </Form.Group>

              <Button variant="primary" type="submit" onClick={this.handleSubmit} block>
            Sign In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  users: state.users
});

export default connect(mapSateToProps)(Login);
