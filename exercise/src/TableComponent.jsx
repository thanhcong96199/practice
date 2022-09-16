import React from 'react'
import Table from 'react-bootstrap/Table';

export default function TableComponent({ listUsers }) {
  console.log(listUsers)
  return (
    <div className='container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map(({ id, first_name, last_name, email, gender, age, salary }, index) => (
            <tr>
              <td>{id}</td>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td>{gender}</td>
              <td>{age}</td>
              <td>{salary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
