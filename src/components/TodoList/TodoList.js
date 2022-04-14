import React from "react";
import "./TodoList.scss";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = () => {
  return (
    <ul className="todo-list-box">
			<TodoListItem />
			<TodoListItem />
			<TodoListItem />
			<TodoListItem />
    </ul>
  );
};

export default TodoList;
