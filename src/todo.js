import React, { useContext } from "react";
import "./app.css";
import { TodoContext } from "./todoContext";

const Todo = ({ id, text, done }) => {
  const [todos, setTodo] = useContext(TodoContext);

  const hanleDone = i => {
    const clicked = todos.find(element => element.id === i);
    const index = todos.indexOf(clicked);
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodo(newTodos);
  };

  const handleDelete = i => {
    const newTodos = [...todos];
    console.log(i);
    setTodo(newTodos.filter(k => k.id !== i));
  };

  return (
    <div className="mt-4">
      <h5 onClick={() => hanleDone(id)}>
        {done === false ? (
          <p className="done ">
            <span className="badge badge-secondary mr-4">{id}</span>
            {text}
          </p>
        ) : (
          <p>
            <span className="badge badge-secondary mr-4">{id}</span>
            {text}
          </p>
        )}
      </h5>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => handleDelete(id)}
      >
        {" "}
        Delete{" "}
      </button>
    </div>
  );
};

export default Todo;
