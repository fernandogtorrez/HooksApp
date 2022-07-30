import React, { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'


const initialState = [{
    id:new Date().getTime(),
    description: 'Aprender React',
    done: false
}]

export const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        dispatch({
            type: 'ADD_TODO', 
            payload: todo
        })
    }

  return (
    <>
        <h2>TodoApp</h2>
        <hr />

        <section className="row">
            <div className="col-7">
                {/* TODO: Crear <TodoList todos={todos} */}
                <TodoList todos={todos}/>
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
