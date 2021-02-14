import "./App.css"

import { InsertTodo } from "./features/todo/InsertTodo"
import { TodoList } from "./features/todo/TodoList"
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
