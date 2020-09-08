import React from "react";
import { Form, Button } from "react-bootstrap";

const MyForm = () => {
  return (
    <Form>
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your or company name" />
      </Form.Group>

      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="5" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
