import React, { useState, useContext } from "react";

import { TodoContext } from "./todoContext";

const AddNewTodo = () => {
  const [todos, setTodo] = useContext(TodoContext);
  const [text, setText] = useState("");

  const updateText = e => {
    setText(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    todos.find(element => element.text === text)
      ? setTodo(previos => [...previos])
      : setTodo(previos => [
          ...previos,
          { text: text, id: todos.length, done: true }
        ]);
  };
  return (
    <div>
      <form className='form-group"' onSubmit={addTodo}>
        <input
          type="text"
          name="todo text"
          value={text}
          onChange={updateText}
          required
        />
        <button className="btn btn-dark btn-sm ml-4 " type="submit">
          What Else...?
        </button>
      </form>
    </div>
  );
};

export default AddNewTodo;
