import React from "react"

import { useSelector } from "react-redux"

export const SingleTodo = ({ match }) => {
  const { todoId } = match.params
  const foundTodo = useSelector((state) =>
    state.todo.find((todo) => todo.id === todoId)
  )

  if (!foundTodo) {
    return <h1>Todo not found</h1>
  }

  return (
    <div>
      <h2>{foundTodo.todo}</h2>
    </div>
  )
}
