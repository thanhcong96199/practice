import logo from "./logo.svg";
import "./App.css";
import DropdownComponent from "./DropdownComponent";
import { useState } from "react";
import { listUsers } from "./data";
import InputComponent from "./InputComponent";
import TableComponent from "./TableComponent";

// const listOptSearch = [
//   {
//     name: "User Name",
//     key: "username",
//   },
//   {
//     name: "Email",
//     key: "email",
//   },
//   {
//     name: "Age",
//     key: "age",
//   },
// ];

function App() {



  // const [users, setUsers] = useState([...listUsers]);
  return (
    <div className='App'>
      {/* component input search */}
      {/* <InputComponent/>
      <DropdownComponent title={"Selection search"} optSearch={listOptSearch} /> */}

      {/*component dropdown list */}

      <TableComponent listUsers={listUsers} />
      {

      }

      {/*component pagination */}
    </div>
  );
}

export default App;
