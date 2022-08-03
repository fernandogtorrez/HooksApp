import { useState } from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithHook } from './02-useEffect/FormWithHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { HookMemo } from './06-memo/HookMemo'
import { Memorize } from './06-memo/Memorize'
import { Small } from './06-memo/Small'
import { HookCallback } from './07-useCallback/HookCallback'
import './App.css'
import './09-reducer/intro-reducer'
import { TodoApp } from './09-reducer/TodoApp'
import { MainApp } from './10-useContext/MainApp'

function App() {
  
  return (
    <div className="App">
      <h1>Hooks App</h1>
      <hr />
      {/* <CounterApp/> */}
      <MainApp/>
    </div>
  )
}

export default App
