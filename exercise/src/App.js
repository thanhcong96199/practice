import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { listUsers } from "./data";
import ModalAddData from "./ModalAddData";

import { nanoid } from "nanoid";

const listOptSearch = [
  {
    name: "User Name",
    key: "username",
  },
  {
    name: "Email",
    key: "email",
  },
  {
    name: "Age",
    key: "age",
  },
];

function App() {
  const [users, setUsers] = useState([...listUsers]);
  const [addValue, setAddValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    salary: "",
    gender: "",
  });

  const handleAddForm = (event) => {
    event.preventDefault();
    const name = event.target.id;
    const value = event.target.value;
    const newAddValue = { ...addValue };
    newAddValue[name] = value;
    setAddValue(newAddValue);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      id: nanoid(),
      first_name: addValue.first_name,
      last_name: addValue.last_name,
      email: addValue.email,
      age: addValue.age,
      salary: addValue.salary,
      gender: addValue.gender,
    };

    setUsers((pre) => {
      return [...pre, newPerson];
    });
  };

  return (
    <div className="App">
      {/*component input search */}

      {/*component dropdown list */}

      {/*component table use */}

      {/*component pagination */}

      <ModalAddData changeForm={handleAddForm} submit={handleAddSubmit} />
    </div>
  );
}

export default App;
