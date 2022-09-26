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
  const [userPage, setUserPage] = useState(
    listUsers.slice(0, PAGINATION.LIMIT)
  );
  const [keySearch, setKeySearch] = useState(KEY_SEARCH.USER_NAME);
  const [valueInputSearch, setValueInputSearch] = useState("");

  const [pagination, setPagination] = useState({
    totalPage: Math.ceil(users.length / PAGINATION.LIMIT),
    currentPage: PAGINATION.CURRENT_PAGE,
  });
  /*
  - Tong so page: 56 items, 1 trang: 10 items => totalPage = Math.ceil(users.length/limit)
  
  */

  const onSelectKeySearch = (keyName) => {
    setKeySearch((pre) => (pre = keyName));
  };

  const onSearchUser = (valueInput) => {
    //users lưu dữ liệu của toàn bộ user: 20 =>
    //userPage lưu dữ liệu của 1 trang thôi

    // let data = [];

    // if (keySearch === KEY_SEARCH.USER_NAME) {
    //   //filter theo key first_name va trung valueInput
    //   data = [...listUsers].filter((item) =>
    //     valueInput ? item.first_name === valueInput : true
    //   );
    //   setUsers((pre) => (pre = [...data])); //bđb =>
    // } else if (keySearch === KEY_SEARCH.AGE) {
    //   //filter theo key age va trung valueInput
    //   data = [...listUsers].filter((item) =>
    //     valueInput ? item.age === valueInput : true
    //   );
    //   setUsers((pre) => (pre = [...data]));
    // } else {
    //   //filter theo key email va trung valueInput
    //   data = [...listUsers].filter((item) =>
    //     valueInput ? item.email === valueInput : true
    //   );
    //   setUsers((pre) => (pre = [...data]));
    // }

    // //Chia data cho phần tử
    // setPagination({
    //   ...pagination,
    //   currentPage: PAGINATION.CURRENT_PAGE,
    //   totalPage: Math.ceil(data.length / PAGINATION.LIMIT),
    // });

    // setUserPage([...data].slice(0, PAGINATION.LIMIT));

    setValueInputSearch(pre => pre = valueInput)
  };

  const onChangePage = (currentPage) => {
    setPagination((pre) => ({
      ...pre,
      currentPage,
    }));

    //slice start, end:

    // const newUser = users.slice(
    //   (currentPage - 1) * PAGINATION.LIMIT,
    //   currentPage * PAGINATION.LIMIT
    // );
    // setUserPage((pre) => (pre = newUser));
  };

  useEffect(() => {
    console.log(valueInputSearch, 'valueInputSearch', 'keySearch', keySearch)
    const data = [...listUsers].filter((item) =>
      valueInputSearch ? item[keySearch] === valueInputSearch : true
    );

    setUsers([...data])
    setPagination({
      ...pagination,
      currentPage: PAGINATION.CURRENT_PAGE,
      totalPage: Math.ceil(data.length / PAGINATION.LIMIT),
    });
  }, [valueInputSearch, keySearch])

  useEffect(() => {
    //keysearch => 
    //pagination => 
    console.log('users', users)
    const newUser = [...users].slice(
      (pagination.currentPage - 1) * PAGINATION.LIMIT,
      pagination.currentPage * PAGINATION.LIMIT
    );
    setUserPage((pre) => (pre = newUser));
  }, [pagination.currentPage, pagination.totalPage])



  return (
    <div className='App m-4'>
      {/*component input search */}
      <div className='flex mb-2'>
        <InputComponent onSearchUser={(e) => onSearchUser(e.target.value)} />
        <DropdownComponent
          title={keySearch}
          optSearch={listOptSearch}
          onSelect={onSelectKeySearch}
        />
      </div>

      {/*component dropdown list */}

      <TableComponent listUsers={userPage} />
      { }

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
