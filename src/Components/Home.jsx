import React, {Component} from "react";
import {connect} from "react-redux";
import {Nav} from "react-bootstrap";

import Login from "./Login";
import QuestionsList from "./QuestionsList";

const unansweredTabKey = "unanswered";
const answeredTabKey = "answered";

class Home extends Component {

  state = {
    selectedTabKey: unansweredTabKey
  }

  handleSelect = eventKey => {
    this.setState({selectedTabKey: eventKey});
  }

  render() {
    const {questions, users, authedUser} = this.props;
    if (questions === undefined) {
      return <div>Questions array is undefined!</div>;
    }

    if (authedUser === null) {
      return <Login />;
    }

    const questionsArr = Object.values(questions);
    const unansweredQuestions = [];
    const answeredQuestions = [];
    questionsArr.forEach(question => {
      if (question.optionOne.votes.filter(d => d === authedUser).length === 0 && question.optionTwo.votes.filter(d => d === authedUser).length === 0) { 
        question.user = users[question.author];
        unansweredQuestions.push(question);
      }
      else {
        question.user = users[question.author];
        answeredQuestions.push(question);
      }
    });

    return (
      <div className="d-flex justify-content-center">
        <div className="m-3 d-flex flex-column">
          <Nav fill variant="tabs" defaultActiveKey={unansweredTabKey} onSelect={k => this.handleSelect(k)} className="border" style={{width: "30rem"}}>
            <Nav.Item>
              <Nav.Link eventKey={unansweredTabKey}>Unanswered Questions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={answeredTabKey}>Answered Questions</Nav.Link>
            </Nav.Item>
          </Nav>
          {this.state.selectedTabKey === unansweredTabKey
            ? unansweredQuestions.sort((a, b) => b.timestamp - a.timestamp).map(item => <QuestionsList key={item.id} question={item} answeredTabKey={false}/>)
            : answeredQuestions.map(item => <QuestionsList key={item.id} question={item} answeredTabKey={true}/>)
          }
        </div>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  users: state.users,
  questions: state.questions,
  authedUser: state.authedUser
});

export default connect(mapSateToProps)(Home);
