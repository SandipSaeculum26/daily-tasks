import "./App.css";

import React from "react";

const App = () => {
  //   if(count<0){
  //     alert("negative number is not allowed");
  // }

  const [count, setCount] = React.useState(1);
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center bg-black">
        <div className=" p-10  bg-gray-600 rounded-lg hover:bg-gray-800 transition-all duration-1000 ease-in-out animate-bounce ">
          <h1 className="text-2xl text-white">Vite + React</h1>
          <p className="text-white pt-2">counter is {count}</p>
          <div className="flex gap-2">
            <button
              className={`mt-2 ${
                count >= 10 ? "hidden" : ""
              } bg-sky-500 rounded-lg p-2 text-white hover:bg-sky-800 transition-all duration-1000 ease-in-out cursor-pointer `}
              onClick={() => setCount(count + 1)}
            >
              increment
            </button>
            <button
              className={`mt-2 ${
                count <= 0 ? "hidden" : ""
              } bg-sky-500 rounded-lg p-2 text-white hover:bg-sky-800 transition-all duration-1000 ease-in-out cursor-pointer `}
              onClick={() => setCount(count - 1)}
            >
              decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
