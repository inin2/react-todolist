import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./TodoListItem.scss";
const TodoListItem = ({ todos, setTodos, id, text, finish }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewTest] = useState(text);

  const onToggleFinish = () => {
    const nextTodos = todos.map((item) => ({
      ...item,
      finish: item.id === id ? !item.finish : item.finish,
    }));
    setTodos(nextTodos);
  }

  const onChangeEditInput = (e) => {
    setNewTest(e.target.value);
  }

  const onClickEditButton = () => {
    setEdited(true);
  }

  const onEditSubmit = () => {
    if (newText === "") {
      return;
    }

    const nextTodos = todos.map((item) => ({
      ...item,
      text: item.id === id ? newText : item.text,
    }));
    setTodos(nextTodos);
    setEdited(false);
  }

  const onDeleteItem = () => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  }

  return (
    <li className={`todo-item ${finish ? "finish" : ""}`}>
      {
        edited ? (
          <input type="text" value={newText} onChange={onChangeEditInput} />
        ) : (
          <span onClick={onToggleFinish}>{text}</span>
        )
      }
      {
        !finish && (
          edited ? (
            <button onClick={onEditSubmit}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </button>
          ) : (
            <button onClick={onClickEditButton}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          ))
      }
      <button onClick={onDeleteItem}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </li >
  );
};

export default TodoListItem;
