import React from "react";
import { Form } from "react-bootstrap";
/**
 *
 *
 *
 *
 *
 */
export default function InputComponent() {
  return (
    <Form.Control
      placeholder='Search'
      aria-label='Search'
      aria-describedby='basic-addon1'
      className="w-2/4 mr-2"
    />
  );
}
