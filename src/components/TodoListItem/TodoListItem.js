import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./TodoListItem.scss";
const TodoListItem = ({ todos, setTodos, id, text, finish }) => {
  const onToggleFinish = () => {
    const nextTodos = todos.map((item) => ({
      ...item,
      finish: item.id === id ? !item.finish : item.finish,
    }));
    setTodos(nextTodos);
  }

  const onDeleteItem = () => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
    // setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <li className={`todo-item ${finish ? "finish" : ""}`}>
      <span onClick={onToggleFinish}>{text}</span>
      <button onClick={onDeleteItem}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </li>
  );
};

export default TodoListItem;
