import logo from "./logo.svg";
import "./App.css";
import DropdownComponent from "./DropdownComponent";
import { useEffect, useState } from "react";
import { listUsers } from "./data";
import InputComponent from "./InputComponent";

import TableComponent from "./TableComponent";


import { KEY_SEARCH, PAGINATION } from "./constants";
import PaginationComponent from "./PaginationComponent";

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
/**
 * users: 20 phần tử
 * userPage: 10 phần tử (0, 9)
 * => 2 => userPage(10, 19)
 * =========
 * search users => tuyet => 5 phần tử 
 * => userPage
 * 
 * 
 * 
 */
function App() {
  const [users, setUsers] = useState([...listUsers]); //users state: lưu tất cả user
  const [userPage, setUserPage] = useState(listUsers.slice(0, 9));
  const [keySearch, setKeySearch] = useState(KEY_SEARCH.USER_NAME);

  const [pagination, setPagination] = useState({
    totalPage: Math.ceil(users.length / PAGINATION.LIMIT),
    currentPage: PAGINATION.CURRENT_PAGE,
  });
  /*
  - Tong so page: 56 items, 1 trang: 10 items => totalPage = Math.ceil(users.length/limit)
  
  */

  const onSelectKeySearch = (keyName) => {
    console.log("keyName", keyName);
    setKeySearch((pre) => (pre = keyName));
  };

  const onSearchUser = (valueInput) => {
    if (keySearch === KEY_SEARCH.USER_NAME) {
      //filter theo key first_name va trung valueInput
    }
  };

  const onChangePage = (currentPage) => {
    setPagination((pre) => ({
      ...pre,
      currentPage,
    }));

    //slice start, end:


    const newUser = users.slice(
      (currentPage - 1) * PAGINATION.LIMIT,
      currentPage * PAGINATION.LIMIT - 1
    );
    setUserPage((pre) => (pre = newUser));
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

      <TableComponent listUsers={listUsers} />
      {

      }

      {/*component pagination */}
      <PaginationComponent
        onChangePage={onChangePage}
        totalPage={pagination.totalPage}
        currentPage={pagination.currentPage}
      />
    </div>
  );
}

export default App;
