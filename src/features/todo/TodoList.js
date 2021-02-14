import React from "react"

import { useSelector } from "react-redux"

export const TodoList = () => {
  const todos = useSelector((state) => state.todo)

  const mapTodos = todos.map((todo, index) => (
    <div key={todo.id}>
      <p>{todo.todo}</p>
    </div>
  ))

  return (
    <div>
      <p>{mapTodos}</p>
    </div>
  )
}
