import React, { useState } from "react"

import { useDispatch } from "react-redux"

import { addTodo } from "./todoSlice"

export const InsertTodo = () => {
  const [todo, setTodo] = useState("")
  const onTodoChange = (e) => setTodo(e.target.value)

  const dispatch = useDispatch()

  const onAddTodo = () => dispatch(addTodo(todo))

  return (
    <div>
      <span>
        <input value={todo} onChange={onTodoChange} />
      </span>
      <button onClick={onAddTodo}>Add</button>
    </div>
  )
}
