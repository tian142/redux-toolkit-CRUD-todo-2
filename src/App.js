import "./App.css"

import { InsertTodo } from "./features/todo/InsertTodo"
import { TodoList } from "./features/todo/TodoList"
import { Navbar } from "./Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <InsertTodo />
      <TodoList />
    </div>
  )
}

export default App
