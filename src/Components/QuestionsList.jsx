import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Container, Row, Col,  ListGroup, ListGroupItem} from "react-bootstrap";
import {Redirect} from "react-router-dom";

import {getAvatar} from "../utils/helper";

const maxTextLength = 40;

class QuestionsList extends Component {

  constructor(props) {
    super(props);
  }
  
  state = {
    redirectToStats: false,
    redirectToPoll: false
  }
  
  renderRedirectToPoll = id => {
    if (this.state.redirectToPoll) {
      return <Redirect to={`/view-poll/${id}`} />;
    }
    return null;
  }

  renderRedirectToStats = id => {
    if (this.state.redirectToStats) {
      return <Redirect to={`/poll-stats/${id}`} />;
    }
    return null;
  }

  handleOnSubmit = (e, answeredTabKeySelected) => {
    e.preventDefault();
    answeredTabKeySelected ? this.setState({redirectToStats: true}) : this.setState({redirectToPoll: true});
    // this.setState({redirect: true});
  }

  render() {
    const {question, answeredTabKey} = this.props;

    const image = getAvatar(question.user.avatarURL);
    const name = question.user.name;
    const questionText1 = question.optionOne.text.length > maxTextLength ? `${question.optionOne.text.substring(0, maxTextLength)}...` : question.optionOne.text;
    const questionText2 = question.optionTwo.text.length > maxTextLength ? `${question.optionTwo.text.substring(0, maxTextLength)}...` : question.optionTwo.text;
    
    return (
      <div>
        {this.renderRedirectToPoll(question.id)}
        {this.renderRedirectToStats(question.id)}
        <Card style={{width: "30rem"}} className="my-3">
          <Container>
            <Row className="p-3">
              <strong>{name} asks:</strong>
            </Row>
            <Row>
              <Col sm={2}>
                <img src={image} alt={question.user.avatarURL} width="50" height="50"/>
              </Col>
              <Col>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{questionText1}</ListGroupItem>
                  <ListGroupItem>{questionText2}</ListGroupItem>
                </ListGroup>
                <button type="button" className="btn btn-outline-primary btn-block m-2" onClick={e => this.handleOnSubmit(e, answeredTabKey)}>View Poll</button>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    );
  }
}

export default connect()(QuestionsList);
