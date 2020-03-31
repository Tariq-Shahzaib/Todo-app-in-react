import React, { useContext } from "react";
import { TodoContext } from "./todoContext";

const NotCompleted = () => {
  const [todos, setTodo] = useContext(TodoContext);

  const handleNotCompleted = () => {
    const newTodos = [...todos];
    const filtredTodos = newTodos.filter(todo => todo.done !== false);
    setTodo(filtredTodos);
  };

  return (
    <div className="d-flex justify-content-center mb-4 mt-4">
      <button className="btn btn-sm btn-warning" onClick={handleNotCompleted}>
        Not Completed{" "}
      </button>
    </div>
  );
};

export default NotCompleted;
