import React from "react";
import { Dropdown } from "react-bootstrap";

export default function DropdownComponent({ title, optSearch }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {optSearch.map((el, index) => (
          <Dropdown.Item href='#/action-1' key={index}>{el.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
