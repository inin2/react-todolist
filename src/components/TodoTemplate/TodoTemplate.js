import React from "react";
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
	return (
		<div className="todo-template">
			{children}
		</div>
	);
};

export default TodoTemplate;