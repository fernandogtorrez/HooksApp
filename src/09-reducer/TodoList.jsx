import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo, onEditTodo}) => {
  return (
    <div>
       <ul className="list-group">
        {
          todos.map(todo => (
          //TODO: Crear <TodoItem todo={}
            <TodoItem 
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
              onEditTodo={onEditTodo}
              />
          ))
        }
        </ul>
    </div>
  )
}
