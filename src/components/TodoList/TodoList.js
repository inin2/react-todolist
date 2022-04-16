import React from "react";
import "./TodoList.scss";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="todo-list-box">
      {todos.map((todo) => <TodoListItem key={todo.id} text={todo.text} setTodos={setTodos} />)}
    </ul>
  );
};

export default TodoList;
