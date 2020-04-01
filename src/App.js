import React from "react";
import AddTodos from "./add-new-todo";
import AllTodos from "./show-all-todos";
import NotCompleted from "./not-completed";
import CompletedTodos from "./show-completed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodoProvider } from "./todoContext";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="container mt-5 ">
      <TodoProvider>
        <div class="d-flex justify-content-center  ">
          <div class="border border-light">
            <Router>
              <Link
                to="/com"
                className=" mb-4 mt-4 mr-4 btn btn-sm btn-primary"
              >
                Completed Todos
              </Link>
              <Link
                to="/ncom"
                className="ml-4 mb-4 mt-4 mr-4 btn btn-sm btn-danger"
              >
                Not Completed
              </Link>
              <Link
                to="/"
                className="ml-4 mb-4 mt-4 mr-4 btn btn-sm btn-success"
              >
                Show All Todos
              </Link>

              <Route path="/" exact component={AddTodos} />
              <Route path="/" exact component={AllTodos} />
              <Switch>
                <Route path="/com" exact component={CompletedTodos} />
                <Route path="/ncom" exact component={NotCompleted} />
              </Switch>
            </Router>
          </div>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
