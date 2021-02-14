import React, { useState } from "react"

import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { editTodo } from "./todoSlice"

export const EditTodo = ({ match }) => {
  const { todoId } = match.params

  const dispatch = useDispatch()
  const history = useHistory()

  const [todo, setTodo] = useState("")

  const onTodoChange = (e) => setTodo(e.target.value)

  const onEditSave = () => {
    dispatch(editTodo({ id: todoId, todo }))
    history.push(`/todo/${todoId}`)
  }

  return (
    <div>
      <input value={todo} onChange={onTodoChange} />
      <button onClick={onEditSave}>Save edit</button>
    </div>
  )
}
