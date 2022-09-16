import React from "react";
import { Dropdown } from "react-bootstrap";

export default function DropdownComponent({ title, optSearch, onSelect }) {
  return (
    <Dropdown className='bg-green-500'>
      <Dropdown.Toggle variant='success'>{title}</Dropdown.Toggle>

      <Dropdown.Menu>
        {optSearch.map((el, index) => (
          <Dropdown.Item key={index} onClick={() => onSelect(el.key)}>
            {el.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
