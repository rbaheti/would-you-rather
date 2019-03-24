import React, {Component} from "react";
import "./App.css";
import {getInitialData} from "./utils/api";
import NavBar from "./Components/NavBar";
import UserScoreCard from "./Components/UserScoreCard";


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
    const {users} = this.state;
    if (users === null) return <div></div>;

    const usersArr = Object.entries(users);

    return (
      <div>
        <NavBar />
        <UserScoreCard user={usersArr[0]}/>
      </div>
    );
  }
}

export default App;
