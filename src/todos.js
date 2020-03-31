import React, { useContext } from "react";
import { TodoContext } from "./todoContext";
import Todo from "./todo";

const Todos = () => {
  const [todos, setTodo] = useContext(TodoContext);

  return (
    <div className="mt-4 ">
      {todos.map(todo => (
        <Todo id={todo.id} text={todo.text} done={todo.done} key={todo.id} />
      ))}
    </div>
  );
};

export default Todos;
