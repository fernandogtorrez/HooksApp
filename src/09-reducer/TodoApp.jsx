import React from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo,handleEditTodo} = useTodo()

  return (
    <>
        <h2>TodoApp: {todosCount}, Pendientes: {pendingTodosCount}</h2>
        <hr />

        <section className="row">
            <div className="col-7">
                {/* TODO: Crear <TodoList todos={todos} */}
                <TodoList 
                    todos={todos}
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                    onEditTodo={handleEditTodo}
                />
            </div>
            <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TODO: Crear <TodoAdd onNewTodo={handleNewTodo} /> */}
                    {/* TODO: {id: new Date..., description, etc} */}
                   <TodoAdd onNewTodo={handleNewTodo} />
            </div>
        </section>

    </>
  )
}
