import React from "react";

function TodoFilter() {
  return (
    <div className="w-[500px] mx-auto text-center bg-white p-5 bg-white flex justify-center gap-5">
      <button className="bg-gray-500 text-white px-3 py-2 rounded-lg">
        All
      </button>
      <button className="bg-gray-500 text-white px-3 py-2 rounded-lg">
        Active
      </button>
      <button
        className="bg-gray-500 text-white px-3 py-2 rounded-lg"
        onClick={() => handleComplete(index)}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
