import React, {Component} from "react";
import "./App.css";
import {getInitialData} from "./utils/api";
import NavBar from "./Components/NavBar";
import LeaderBoard from "./Components/LeaderBoard";


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

    return (
      <div>
        <NavBar />
        <LeaderBoard users={users}/>
      </div>
    );
  }
}

export default App;
