import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import {connect} from "react-redux";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import LeaderBoard from "./Components/LeaderBoard";
import NewQuestion from "./Components/NewQuestion";
import Vote from "./Components/Vote";
import PollStats from "./Components/PollStats";
import {handleInitialData} from "./actions/shared";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <NavBar />
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              <Route path="/new" exact component={NewQuestion} />
              <Route path="/view-poll/:qid" exact component={Vote} />
              <Route path="/poll-stats/:qid" exact component={PollStats} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
