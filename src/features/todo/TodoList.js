import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { deleteTodo } from "./todoSlice"

export const TodoList = () => {
  const todos = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const mapTodos = todos.map((todo, index) => (
    <div key={todo.id}>
      <span>{todo.todo}</span>
      <Link to={`/todo/${todo.id}`}>View</Link>
      <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
    </div>
  ))

  return (
    <div>
      <div>{mapTodos}</div>
    </div>
  )
}
