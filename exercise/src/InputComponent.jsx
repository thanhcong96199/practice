import React, { useState } from "react";
import { Form, NavDropdown } from "react-bootstrap";
/**
 *
 *
 *
 *
 *
 */
export default function InputComponent(props) {

  return (
    <Form.Control
      placeholder='Search'
      aria-label='Search'
      aria-describedby='basic-addon1'
      className="w-2/4 mr-2"
      onChange={props.onSearchUser}
    />
  );
}
