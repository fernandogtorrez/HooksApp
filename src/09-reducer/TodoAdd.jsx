import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

  const {formState,onInputChange, onResetForm} =  useForm({description: ''})

  const {description} = formState

  const onFormSubmit = (e) => {
    e.preventDefault()
    if(description.length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    onNewTodo(newTodo)
    onResetForm()
  }


  return (
    <>
      <form onSubmit={onFormSubmit} >
        <input 
          type="text"
          className='form-control'
          placeholder='Tarea...'
          value={description}
          onChange={onInputChange}
          name = 'description'
        />
        <button 
          className='btn btn-outline-primary mt-2'
          type='submit'
        >
          Agregar
        </button>
      </form>
    </>
  )
}
