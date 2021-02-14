import React from "react"

import { useSelector, useDispatch } from "react-redux"

import { deleteTodo } from "./todoSlice"

export const TodoList = () => {
  const todos = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const mapTodos = todos.map((todo, index) => (
    <div key={todo.id}>
      <span>{todo.todo}</span>
      <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
    </div>
  ))

  return (
    <div>
      <div>{mapTodos}</div>
    </div>
  )
}
