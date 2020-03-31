import React, { useContext } from "react";
import { TodoContext } from "./todoContext";
const CompletedTodos = () => {
  const [todos, setTodo] = useContext(TodoContext);

  const handleCompleted = () => {
    const newTodos = [...todos];
    const filtredTodos = newTodos.filter(todo => todo.done === false);
    setTodo(filtredTodos);
  };

  return (
    <div className="d-flex justify-content-center mb-4 mt-4">
      <button className="btn btn-danger btn-sm" onClick={handleCompleted}>
        {" "}
        Completed{" "}
      </button>
    </div>
  );
};

export default CompletedTodos;
