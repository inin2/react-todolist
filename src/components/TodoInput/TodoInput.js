import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./TodoInput.scss";

const TodoInput = () => {
  return (
    <form className="todo-input-form">
      <input type="text" placeholder="Add a task ..." autocomplete="off" maxLength="50" />
      <button>
        <FontAwesomeIcon icon={faPlus} className="ico-plus" />
      </button>
    </form>
  );
};

export default TodoInput;
