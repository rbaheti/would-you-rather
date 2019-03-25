import React, {Component} from "react";
import {connect} from "react-redux";
import UserScoreCard from "./UserScoreCard";

class LeaderBoard extends Component {

  render() {

    const {users} = this.props;
    if (users === undefined) {
      return <div></div>;
    }

    const usersArr = Object.values(users);
    usersArr.sort((a, b) => {
      const len1 = a.questions.length + Object.keys(a.answers).length;
      const len2 = b.questions.length + Object.keys(b.answers).length;
      return len2 - len1;
    });

    return (
      <div>
        {usersArr.map(user => <UserScoreCard key={user.id} user={user}/>)}
      </div>
    );
  }
}

const mapSateToProps = state => ({
  users: state.users
});

export default connect(mapSateToProps)(LeaderBoard);
