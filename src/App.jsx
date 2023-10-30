import TodoFilter from "./components/todo-filter";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="bg-white w-full h-screen flex justify-center flex-col">
      <TodoInput />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

export default App;
