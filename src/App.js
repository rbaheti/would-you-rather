import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import {connect} from "react-redux";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import LeaderBoard from "./Components/LeaderBoard";
import NewQuestion from "./Components/NewQuestion";
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
              <Route path="/home" exact component={Home} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              <Route path="/new" exact component={NewQuestion} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
