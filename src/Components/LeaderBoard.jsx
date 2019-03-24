import React, {Component} from "react";
import UserScoreCard from "./UserScoreCard";

class LeaderBoard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {users} = this.props;

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

export default LeaderBoard;
