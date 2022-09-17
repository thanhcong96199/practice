import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function ModalAddData({ changeForm, submit }) {
  return (
    <div className="container-fluid">
      <Form onSubmit={(event) => submit(event)}>
        <Form.Group className="mb-3" controlId="formFirstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            id="first_name"
            onChange={(event) => changeForm(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            id="last_name"
            onChange={(event) => changeForm(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            id="email"
            onChange={(event) => changeForm(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            min="18"
            placeholder="Enter Age"
            id="age"
            onChange={(event) => changeForm(event)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSalary">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            min="0"
            placeholder="Enter Salary"
            id="salary"
            onChange={(event) => changeForm(event)}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="txt"
            min="0"
            placeholder="Enter Gender"
            id="gender"
            onChange={(event) => changeForm(event)}
          />
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="gender">
          <Form.Check
            type="checkbox"
            label="Male"
            value="Male"
            name="gender"
            onChange={(event) => changeForm(event)}
          />
          <Form.Check
            type="checkbox"
            label="Female"
            value="Female"
            name="gender"
            onChange={(event) => changeForm(event)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
