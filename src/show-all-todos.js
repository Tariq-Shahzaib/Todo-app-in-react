import React, { useContext } from "react";
import Todos from "./todos";
import { TodoContext } from "./todoContext";

const AllTodos = () => {
  const [todos, setTodo] = useContext(TodoContext);

  const handleAll = () => {
    setTodo(todos);
  };

  return (
    <div className="">
      <Todos />
      <div></div>
    </div>
  );
};

export default AllTodos;
