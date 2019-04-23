import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import UserScoreCard from "./UserScoreCard";

class LeaderBoard extends Component {

  render() {
    const {authedUser, users} = this.props;
    if (authedUser === null) {
      return <Redirect to={"/"} />;
    }

    if (users === undefined) {
      return null;
    }

    const usersArr = Object.values(users);
    usersArr.sort((a, b) => {
      const len1 = a.questions.length + Object.keys(a.answers).length;
      const len2 = b.questions.length + Object.keys(b.answers).length;
      return len2 - len1;
    });

    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          {usersArr.map(user => <UserScoreCard key={user.id} user={user}/>)}
        </div>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  authedUser: state.authedUser,
  users: state.users
});

export default connect(mapSateToProps)(LeaderBoard);
