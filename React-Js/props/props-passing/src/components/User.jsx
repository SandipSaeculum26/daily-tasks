import React from "react";

// const User = (props) => {
//   const { userName, age , address } = props.user; // Destructuring user object from props
//   console.log({ userName });
//   return (
//     <>
//       <div>User</div>
//       <h2>Name: {userName}</h2>
//       <p>Address: {address.street}, {address.city}, {address.state}, {address.zip}</p>
//       <h4>Age: {age}</h4>
//     </>
//   );
// };


const User = ({name = "user"}) => {

  return (
    <>
     <div>{name}</div>
    </>
  );
};

export default User;
