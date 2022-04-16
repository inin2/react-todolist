import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./TodoListItem.scss";

const TodoListItem = ({ text, finish }) => {
  return (
    <li className={`todo-item ${finish ? "finish" : ""}`}>
      <span>{text}</span>
      <button>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </li>
  );
};

export default TodoListItem;
