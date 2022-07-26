import { useState } from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithHook } from './02-useEffect/FormWithHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <h1>Hooks App</h1>
      <hr />
      {/* <CounterApp/> */}
      <Layout/>
    </div>
  )
}

export default App
