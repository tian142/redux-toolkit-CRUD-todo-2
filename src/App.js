import "./App.css"

import { InsertTodo } from "./features/todo/InsertTodo"
import { TodoList } from "./features/todo/TodoList"
import { SingleTodo } from "./features/todo/SingleTodo"
import { Navbar } from "./Navbar"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <InsertTodo />
                <TodoList />
              </>
            )}
          />
          <Route exact path="/todo/:todoId" component={SingleTodo} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
