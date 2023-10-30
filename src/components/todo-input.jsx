import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoInput() {
  const { todos, setTodos } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, value: input, status: false },
    ]);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-[500px] mx-auto text-center bg-white p-5">
      <h1 className="text-3xl font-bold mb-8">What's the plan for today</h1>
      <form className="flex flex-row justify-center">
        <input
          className="bg-white border-2 placeholder:text-gray-400 border-gray-400 w-3/4 p-3 text-black rounded-lg"
          type="text"
          placeholder="What to do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-3 px-3 rounded-lg mb-5 w-1/6 ms-2"
          type="submit"
          onClick={handleClick}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
