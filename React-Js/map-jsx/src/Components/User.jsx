import React from 'react'

const User = () => {
    const users = [
      {
        id: 1,
        name: "sandip",
        age: 25,
        city: "kolkata",
        mobile: "1234567890",
        Email: "sandip@example.com",
      },
      {
        id: 2,
        name: "john",
        age: 23,
        city: "mumbai",
        mobile: "9876543210",
        Email: "john@example.com",
      },
      {
        id: 3,
        name: "sam",
        age: 15,
        city: "delhi",
        mobile: "123456789",
        Email: "sam@example.com",
      },
      {
        id: 4,
        name: "bruce",
        age: 29,
        city: "chennai",
        mobile: "9876533210",
        Email: "bruce@example.com",
      },
      {
        id: 5,
        name: "neha",
        age: 35,
        city: "bangalore",
        mobile: "7894567890",
        Email: "neha@example.com",
      },
      {
        id: 6,
        name: "preetam",
        age: 40,
        city: "hyderabad",
        mobile: "1234447890",
        Email: "preetam@example.com",
      },
      {
        id: 7,
        name: "govind",
        age: 17,
        city: "kolkata",
        mobile: "123890",
        Email: "govind@example.com",
      },
    ];

    return (
      <div>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
              <td>City</td>
              <td>Mobile</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {users.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.age}</td>
                <td>{users.city}</td>
                <td>{users.mobile}</td>
                <td>{users.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default User