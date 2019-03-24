import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import {Container, Row, Col,  ListGroup, ListGroupItem} from "react-bootstrap";
import man from "../images/man.png";
import boy from "../images/boy.png";
import girl from "../images/girl.png";

const getAvatar = avatar => {
  if (avatar === "boy") return boy;
  if (avatar === "man") return man;
  if (avatar === "girl") return girl;
  return "";
};

class UserScoreCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {user} = this.props;
    const name = user.name;
    const numOfAns = Object.keys(user.answers).length;
    const numOfQuestions = user.questions.length;
    const scores = numOfAns + numOfQuestions;
    const image = getAvatar(user.avatarURL);

    return (
      <Card style={{width: "30rem"}}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Container>
          <Row>
            <Col sm={2}>
              <img src={image} alt="man" width="50" height="60"/>
            </Col>
            <Col sm={6}>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Answered Questions: {numOfAns}</ListGroupItem>
                <ListGroupItem>Created Questions: {numOfQuestions}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col sm={4}>
              <ListGroup className="list-group-flush align-middle">
                <ListGroupItem>Score</ListGroupItem>
                <ListGroupItem>{scores}</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Card>
    );
  }
}

export default UserScoreCard;
