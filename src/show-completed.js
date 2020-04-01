import React, { useContext, useState } from "react";
import Todo from "./todo";
import { TodoContext } from "./todoContext";
const CompletedTodos = () => {
  const [todos, setTodo] = useContext(TodoContext);

  const handleCompleted = () => {
    console.log(todos);
  };

  return (
    <div className="d-flex justify-content-center mb-4 mt-4">
      <div className="mt-4 ">
        {todos.map(todo =>
          todo.done === false ? (
            <Todo
              id={todo.id}
              text={todo.text}
              done={todo.done}
              key={todo.id}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default CompletedTodos;
