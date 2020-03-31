import React from "react";
import AddTodos from "./add-new-todo";
import AllTodos from "./show-all-todos";
import NotCompleted from "./not-completed";
import CompletedTodos from "./show-completed";

import { TodoProvider } from "./todoContext";

function App() {
  return (
    <div className="container mt-5 ">
      <TodoProvider>
        <div class="d-flex justify-content-center  ">
          <div class="border border-light">
            {" "}
            <AddTodos />
            <AllTodos />
            <CompletedTodos />
            <NotCompleted />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
