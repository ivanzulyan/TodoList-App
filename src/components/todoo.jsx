import React from "react";

function Todoo() {
  return (
    <div className="bg-gray-200 w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto text-center bg-white p-5">
        <h1 className="text-3xl font-bold mb-8">What's the plan for today</h1>
        <form className="flex flex-row justify-center">
          <input
            className="border-2 placeholder:text-gray-400 border-gray-400 w-3/4 p-3 text-black rounded-lg"
            type="text"
            placeholder="What todo"
          />
          <button
            className="bg-blue-500 text-white py-3 px-3 rounded-lg mb-5 w-1/6 ms-2"
            type="submit"
          >
            Add
          </button>
        </form>
        <div className="todo-show">
          <div className="bg-white flex justify-center gap-5">
            <button className="bg-gray-500 text-white px-3 py-2 rounded-lg">
              All
            </button>
            <button className="bg-gray-500 text-white px-3 py-2 rounded-lg">
              Active
            </button>
            <button className="bg-gray-500 text-white px-3 py-2 rounded-lg">
              Completed
            </button>
          </div>
          <div>
            <ul className="px-4">
              <li className="bg-white border-2 border-gray-400 flex justify-between items-center w-full text-black py-3 rounded-lg text-2xl px-5 my-4">
                <input type="checkbox" />
                <span>Hello</span>
                <span>
                  <button className="me-5">Y</button>
                  <button>X</button>
                </span>
              </li>
              <li className="bg-white border-2 border-gray-400  flex justify-between items-center w-full text-black py-3 rounded-lg text-2xl px-5 my-4">
                <input type="checkbox" />
                <span>Hello</span>
                <span>
                  <button className="me-5">Y</button>
                  <button>X</button>
                </span>
              </li>
              <li className="bg-white border-2 border-gray-400  flex justify-between items-center w-full text-black py-3 rounded-lg text-2xl px-5 my-4">
                <input type="checkbox" />
                <span>Hello</span>
                <span>
                  <button className="me-5">Y</button>
                  <button>X</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todoo;
