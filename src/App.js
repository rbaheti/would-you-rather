import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";
import {getInitialData} from "./utils/api";
import NavBar from "./Components/NavBar";
import LeaderBoard from "./Components/LeaderBoard";
import {handleInitialData} from "./actions/shared";


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    return (
      <div>
        <NavBar />
        <LeaderBoard/>
      </div>
    );
  }
}

export default connect()(App);
