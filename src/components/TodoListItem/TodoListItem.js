import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./TodoListItem.scss";

const TodoListItem = () => {
  return (
    <li className="todo-item">
      <span>Lorem ipsum dolor sit amet orci aliquam.</span>
      <button>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </li>
  );
};

export default TodoListItem;
