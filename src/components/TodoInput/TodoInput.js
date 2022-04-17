import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./TodoInput.scss";

const TodoInput = ({ todos, setTodos }) => {
  const [text, setText] = useState("");
  const [todoId, setTodoId] = useState(0);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onSubmitInput = (e) => {
    e.preventDefault();
    const AddTodoList = todos.concat({
      id: todoId,
      text,
      finish: false,
    });
    setTodos(AddTodoList);
    setText("");
    setTodoId(prev => prev + 1);
  };

  return (
    <form className="todo-input-form" onSubmit={onSubmitInput}>
      <input
        type="text"
        value={text}
        onChange={onChangeInput}
        placeholder="Add a task ..."
        autoComplete="off"
        maxLength="50"
      />
      <button>
        <FontAwesomeIcon icon={faPlus} className="ico-plus" />
      </button>
    </form>
  );
};

export default TodoInput;
