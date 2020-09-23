import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const MyForm = () => {
  return (
    <Form>
      <Form.Group controlId="Name">
        <Form.Label className="section-item-header">Name</Form.Label>
        <Form.Control placeholder="Enter your or company name" />
      </Form.Group>

      <Form.Group controlId="formGroupEmail">
        <Form.Label className="section-item-header">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" disabled />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label className="section-item-header">Message</Form.Label>
        <Form.Control as="textarea" rows="5" disabled />
      </Form.Group>
      <Button
        variant="dark"
        type="submit"
        onClick={() => {
          alert(`Sorry, not implemented yet!`);
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
