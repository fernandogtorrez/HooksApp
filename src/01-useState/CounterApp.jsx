import React, {useState} from 'react'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 0,
        counter2: 10,
        counter3: 20,
    });

    const {counter1, counter2, counter3} = counter;

    const handleCount = () => {
        if(counter3 >= 30) return
        let counterName = 'counter1'
        if(counter1 >= 10) counterName = 'counter2'
        if(counter2 >= 20) counterName = 'counter3'
        setCounter({
            ...counter,
            [counterName]: counter[counterName] + 1
        })
    }

  return (
    <>
        <h2>CounterApp</h2>
        <h3>Counter1: { counter1 }</h3>
        <h3>Counter2: { counter2 }</h3>
        <h3>Counter3: { counter3 }</h3>
        <button 
        className='btn btn-primary'
        onClick={handleCount}
        >
            +1
        </button>
    </>
  )
}
