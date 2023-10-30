import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todo-provider";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";

function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);
  const [editTodo, setEditTodo] = useState(null);

  const handleStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodoItem = (id, value) => {
    setEditTodo({ id, value });
  };

  const saveEdit = () => {
    if (editTodo && editTodo.value !== "") {
      const updateTodos = todos.map((todo) =>
        todo.id === editTodo.id ? { ...todo, value: editTodo.value } : todo
      );
      setTodos(updateTodos);
      setEditTodo(null);
    }
  };

  return (
    // LIST TODO
    <div className="w-[500px] mx-auto text-center bg-white p-5">
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className="bg-white border-2 border-gray-400 flex justify-between items-center w-full text-black py-3 rounded-lg text-2xl px-5 my-4"
        >
          <input
            type="checkbox"
            onClick={() => handleStatus(todo.id, index)}
            className={
              todo.status
                ? "form-checkbox h-5 w-5 text-indigo-600"
                : "form-checkbox h-5 w-5"
            }
          />

          {editTodo && editTodo.id === todo.id ? (
            <input
              className="text-center"
              type="text"
              value={editTodo.value}
              onChange={(e) =>
                setEditTodo({ id: todo.id, value: e.target.value })
              }
            />
          ) : (
            <span className={todo.status ? "line-through" : ""}>
              {todo.value}
            </span>
          )}

          <div>
            {editTodo && editTodo.id === todo.id ? (
              <button onClick={saveEdit}>
                {" "}
                <FaSave />{" "}
              </button>
            ) : (
              <button
                className="me-5"
                onClick={() => editTodoItem(todo.id, todo.value)}
              >
                <FaEdit />
              </button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
