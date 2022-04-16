import "./App.scss";
import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <TodoTemplate>
        <TodoInput todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </TodoTemplate>
    </div>
  );
}

export default App;
