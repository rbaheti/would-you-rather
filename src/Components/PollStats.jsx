import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Container, Row, Col, ProgressBar} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {getAvatar} from "../utils/helper";

import {saveQuestionAnswer} from "../utils/api";
import {handleInitialData} from "../actions/shared";

class PollStats extends Component {

  constructor(props) {
    super(props);
    this.answerChoice = null;
  }

  handleOnSubmit = (e, question) => {
    e.preventDefault();
    const {authedUser} = this.props;
    const qid = question.id;
    const answer = this.answerChoice.id === "questionText1" ? "optionOne" : "optionTwo";

    saveQuestionAnswer({authedUser, qid, answer})
      .then(this.props.dispatch(handleInitialData()));
  }

  render() {
    const {authedUser, questions, users} = this.props;
    if (authedUser === null) {
      return <Redirect to={"/"} />;
    }

    if (questions === undefined || users === undefined) {
      return <p>Questions OR Users array is undefined!</p>;
    }
    const qid = this.props.match.params.qid;
    const question = questions[qid];
    if (question === undefined) return null;

    question.user = users[question.author];

    const image = getAvatar(question.user.avatarURL);
    const name = question.user.name;
    const questionText1 = question.optionOne.text.toLowerCase();
    const questionText2 = question.optionTwo.text.toLowerCase();

    // Find this question's stats
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const total = optionOneVotes + optionTwoVotes;
    const optionOneVotesShare = Math.floor(optionOneVotes / total * 100);
    const optionTwoVotesShare = Math.floor(optionTwoVotes / total * 100);
    
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <Card style={{width: "30rem"}} className="my-3">
            <Container>
              <Row className="p-3">
                <strong>Asked by {name}</strong>
              </Row>
              <Row>
                <Col sm={2}>
                  <img src={image} alt={question.user.avatarURL} width="50" height="50"/>
                </Col>
                <Col>
                  <h5>Results:</h5>
                  <Card className="my-3">
                    <Container>
                      <p>Would you rather {questionText1}</p>
                      <ProgressBar style={{height: "1.5rem"}} variant="info" now={optionOneVotesShare} label={`${optionOneVotesShare}%`}/>
                      <div className="text-center">{optionOneVotes} out of {total}</div>
                    </Container>
                  </Card>
                  <Card className="my-3">
                    <Container>
                      <p>Would you rather {questionText2}</p>
                      <ProgressBar style={{height: "1.5rem"}} variant="info" now={optionTwoVotesShare} label={`${optionTwoVotesShare}%`}/>
                      <div className="text-center">{optionTwoVotes} out of {total}</div>
                    </Container>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Card>
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

export default connect(mapSateToProps)(PollStats);
