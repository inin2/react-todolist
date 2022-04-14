import "./App.scss";
import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="container">
      <TodoTemplate>
        <TodoInput />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;
