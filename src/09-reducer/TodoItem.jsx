import React from 'react'
import { useState } from 'react'
import { TodoEdit } from './TodoEdit'

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo, onEditTodo}) => {

  const [editEnable, setEditEnable] = useState(false)

  const editMode = () =>{
    setEditEnable(true)
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        {
          !editEnable ?
        <>
        <span 
          className={`align-self-center user-select-none ${todo.done ? 'text-decoration-line-through': ''}`}
          onDoubleClick={()=> onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button className='btn btn-info' onClick={()=> editMode()}>✏️</button>
        <button
          className="btn btn-danger"
          onClick={()=>onDeleteTodo(todo.id)}
        >
          x
        </button>
        <button className='btn btn-success' onClick={()=> onToggleTodo(todo.id)}>Listo</button></>
        :
          <TodoEdit
            setEditEnable={setEditEnable}
            todo={todo}
            onEditTodo={onEditTodo}
          />
        }
      </li>
    </>
  )
}
