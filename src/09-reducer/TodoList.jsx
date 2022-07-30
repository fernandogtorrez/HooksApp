import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos = []}) => {
  return (
    <div>
       <ul className="list-group">
        {
          todos.map(todo => (
          //TODO: Crear <TodoItem todo={}
            <TodoItem key={todo.id} todo={todo} />
          ))
        }
        </ul>
    </div>
  )
}
