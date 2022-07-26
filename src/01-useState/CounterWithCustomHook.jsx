import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment,decrement,reset } = useCounter(0)


  return (
    <>
        <h2>CounterWithCustomHook : {counter}</h2>
        <hr />

        <button className='btn btn-primary' onClick={()=>decrement(1)}>-1</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={()=>increment(1)}>+1</button>
        
    </>
  )
}
