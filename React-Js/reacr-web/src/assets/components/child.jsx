import React from "react";

function Child(props) {
  return (
    <div>
      <div className="bg-slate-200 flex justify-around ">
        <div>
          <h2>Child Component</h2>
        </div>
        <div className="">
          <ul className="flex gap-5 justify-end pr-35 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Child;
