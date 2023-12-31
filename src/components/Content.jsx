import React, { useEffect, useState } from "react";

function Content() {
  const [count, setCount] = useState(0);
  console.log("update", count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    //effect body
    console.log("counted mounted");

    const runner = setInterval(() => {
      console.log("u setInterval", Math.random());
    }, 3000);

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    return () => {
      //clean up function
      console.log("counted unmounted");
      clearInterval(runner);
    };
  }, [count]);
  return (
    <div className="mt-4">
      <p className="text-lg mb-5">This is the hidden content.</p>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
          onClick={decrement}
        >
          -
        </button>
        <p className="text-2xl font-bold">{count}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-4"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Content;
