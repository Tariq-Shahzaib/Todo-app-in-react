import React, { useContext } from "react";
import { TodoContext } from "./todoContext";
import Todo from "./todo";
const NotCompleted = () => {
  const [todos, setTodo] = useContext(TodoContext);

  // const handleNotCompleted = () => {
  //   const newTodos = [...todos];
  //   const filtredTodos = newTodos.filter(todo => todo.done !== false);
  //   setTodo(filtredTodos);
  // };

  return (
    <div className="d-flex justify-content-center mb-4 mt-4">
      <div className="mt-4 ">
        {todos.map(todo =>
          todo.done === true ? (
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

export default NotCompleted;
