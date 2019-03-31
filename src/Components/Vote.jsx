import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Container, Row, Col, Form} from "react-bootstrap";
import {getAvatar} from "../utils/helper";

import {saveQuestionAnswer} from "../utils/api";
import {handleInitialData} from "../actions/shared";

const maxTextLength = 40;

class Vote extends Component {

  constructor(props) {
    super(props);
    this.answerChoice = null;
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const {authedUser} = this.props;
    const qid = this.props.question.id;
    const answer = this.answerChoice.id === "questionText1" ? "optionOne" : "optionTwo";

    saveQuestionAnswer({authedUser, qid, answer})
      .then(this.props.dispatch(handleInitialData()));
  }

  render() {
    const {question} = this.props;
    console.log("question from Vote: ", question);

    if (question === undefined) return null;

    const image = getAvatar(question.user.avatarURL);
    const name = question.user.name;
    const questionText1 = question.optionOne.text.length > maxTextLength ? `${question.optionOne.text.substring(0, maxTextLength)}...` : question.optionOne.text;
    const questionText2 = question.optionTwo.text.length > maxTextLength ? `${question.optionTwo.text.substring(0, maxTextLength)}...` : question.optionTwo.text;
    
    return (
      <Card style={{width: "30rem"}} className="my-3">
        <Container>
          <Row className="p-3">
            <strong>{name} asks..</strong>
          </Row>
          <Row>
            <Col sm={2}>
              <img src={image} alt={question.user.avatarURL} width="50" height="60"/>
            </Col>
            <Col>
              <p>Would You Rather...</p>
              <Form.Check 
                type={"radio"}
                id={"questionText1"}
                name="questionRadio"
                label={questionText1}
                ref={select => this.answerChoice = select}
                defaultChecked
              />
              <Form.Check 
                type={"radio"}
                id={"questionText2"}
                name="questionRadio"
                label={questionText2}
              />
              <button type="button" className="btn btn-outline-primary btn-block m-2" onClick={this.handleOnSubmit}>Submit</button>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

const mapSateToProps = state => ({
  authedUser: state.authedUser
});

export default connect(mapSateToProps)(Vote);
