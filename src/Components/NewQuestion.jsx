import React, {Component} from "react";
import {connect} from "react-redux";
import {Form, Button, Card} from "react-bootstrap";
import {saveQuestion} from "../utils/api";

import {handleInitialData} from "../actions/shared";

class NewQuestion extends Component {

  state = {
    option1: "",
    option2: ""
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
    this.setState ({
      option1: "",
      option2: ""
    });
    saveQuestion(newQuestion)
      .then(this.props.dispatch(handleInitialData()));
  }

  render() {
    return (
      <div>
        <Form className="m-5">
          <Form.Group controlId="formBasicEmail">
            <Card.Title>Create the question </Card.Title>
            <Form.Label><strong>Would you rather...</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter option one text here" value={this.state.option1} onChange={e => this.handleChange(e, "option1")} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>OR</Form.Label>
            <Form.Control type="text" placeholder="Enter option two text here" value={this.state.option2} onChange={e => this.handleChange(e, "option2")}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapSateToProps = state => ({
  authedUser: state.authedUser
});

export default connect(mapSateToProps)(NewQuestion);
