import logo from "./logo.svg";
import "./App.css";
import DropdownComponent from "./DropdownComponent";
import { useState } from "react";
import { listUsers } from "./data";
import InputComponent from "./InputComponent";
import { KEY_SEARCH } from "./constants";

const listOptSearch = [
  {
    name: "User Name",
    key: KEY_SEARCH.USER_NAME,
  },
  {
    name: "Email",
    key: KEY_SEARCH.EMAIL,
  },
  {
    name: "Age",
    key: KEY_SEARCH.AGE,
  },
];

function App() {
  const [users, setUsers] = useState([...listUsers]);
  const [keySearch, setKeySearch] = useState(KEY_SEARCH.USER_NAME);

  const onSelectKeySearch = (keyName) => {
    console.log("keyName", keyName);
    setKeySearch((pre) => (pre = keyName));
  };

  const onSearchUser = (valueInput) => {
    if (keySearch === KEY_SEARCH.USER_NAME) {
      //filter theo key first_name va trung valueInput
    }
  };
  
  return (
    <div className='App m-4'>
      {/*component input search */}
      <div className='flex'>
        <InputComponent />
        <DropdownComponent
          title={keySearch}
          optSearch={listOptSearch}
          onSelect={onSelectKeySearch}
        />
      </div>

      {/*component dropdown list */}

      {/*component table use */}

      {/*component pagination */}
    </div>
  );
}

export default App;
