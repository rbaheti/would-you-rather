import React, {Component} from "react";
import {Form, Button, Card} from "react-bootstrap";

class NewQuestion extends Component {

  render() {

    return (
      <div>
        <Form className="m-5">
          <Form.Group controlId="formBasicEmail">
            <Card.Title>Complete the question: </Card.Title>
            <Form.Label><strong>Would you rather...</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter option one text here" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>OR</Form.Label>
            <Form.Control type="text" placeholder="Enter option two text here" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewQuestion;
