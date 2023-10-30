import { Children, createContext, useState } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const getTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(
    getTodos
      ? getTodos
      : [
          { id: 1, value: "Belajar Todo", status: false },
          { id: 2, value: "Belajar React", status: false },
          { id: 3, value: "Belajar Database", status: false },
        ]
  );

  const [todoEdit, setTodoEdit] = useState({});

  return (
    <TodoContext.Provider value={{ todos, setTodos, todoEdit, setTodoEdit }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
