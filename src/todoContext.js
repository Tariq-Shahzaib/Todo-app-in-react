import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, setTodos] = useState([
    { id: 0, text: "learn React", done: true },
    { id: 1, text: "Attend Online Classes", done: true },
    { id: 2, text: "Call Someone", done: false }
  ]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
