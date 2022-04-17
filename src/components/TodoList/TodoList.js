import React from "react";
import "./TodoList.scss";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="todo-list-box">
      {todos.map((todo) => <TodoListItem key={todo.id} todos={todos} setTodos={setTodos} id={todo.id} text={todo.text} finish={todo.finish} />)}
    </ul>
  );
};

export default TodoList;
