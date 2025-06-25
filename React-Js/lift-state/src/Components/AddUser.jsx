import React from "react";


const AddUser = ({setUser}) => {
  return (
    <div>
      <h2>Add User</h2>
      <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="enter Your name" />
    </div>
  );
};

export default AddUser;
