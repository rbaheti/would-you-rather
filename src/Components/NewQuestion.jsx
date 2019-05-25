import React, {Component} from "react";
import {connect} from "react-redux";
import {Form, Button, Card} from "react-bootstrap";
import {Redirect} from "react-router-dom";

import {saveQuestion} from "../utils/api";
import {handleInitialData} from "../actions/shared";

class NewQuestion extends Component {

  state = {
    option1: "",
    option2: "",
    formSubmitted: false
  }

  handleChange = (e, optionId) => {
    const text = e.target.value;
    if (optionId === "option1") {
      this.setState({
        option1: text
      });
    } 
    else if (optionId === "option2") {
      this.setState({
        option2: text
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const newQuestion = {
      authedUser: this.props.authedUser,
      optionOne: {
        text: this.state.option1.trim()
      },
      optionTwo: {
        text: this.state.option2.trim()
      }
    };
    if (newQuestion.optionOne.text === "" || newQuestion.optionTwo.text === "") {
      return null;
    }

    this.setState ({formSubmitted: true});
    saveQuestion(newQuestion)
      .then(this.props.dispatch(handleInitialData()));
  }

  render() {
    const {authedUser} = this.props;
    if (authedUser === null) {
      return <Redirect to={"/"} />;
    }

    if (this.state.formSubmitted) {
      return <Redirect to={"/home"} />;
    }

    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <Card style={{width: "30rem"}} className="m-3">
            <Card.Body>
              <Card.Title>Create New Question</Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label><strong>Would you rather...</strong></Form.Label>
                  <Form.Control type="text" placeholder="Enter option one text here" value={this.state.option1} onChange={e => this.handleChange(e, "option1")} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>OR</Form.Label>
                  <Form.Control type="text" placeholder="Enter option two text here" value={this.state.option2} onChange={e => this.handleChange(e, "option2")}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit} block>
            Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  authedUser: state.authedUser
});

export default connect(mapSateToProps)(NewQuestion);
