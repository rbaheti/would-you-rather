import React, {Component} from "react";
import "./App.css";
import {getInitialData} from "./utils/api";
import NavBar from "./Components/NavBar";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: null,
      questions: null
    };
  }

  componentDidMount() {
    getInitialData()
      .then(({users, questions}) => {
        this.setState({users, questions});
      });
  }

  render() {

    return (
      <div>
        <NavBar />
        {JSON.stringify(this.state.users)}
      </div>
    );
  }
}

export default App;
