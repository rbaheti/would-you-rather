import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { getInitialData } from './utils/api'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: null,
      questions: null
    };
  }

  componentDidMount () {
    getInitialData()
    .then(({ users, questions }) => {
      this.setState({users, questions});
    });
  }

  render() {

    return (
      <div>{JSON.stringify(this.state.users)}</div>
    );
  }
}

export default App;
