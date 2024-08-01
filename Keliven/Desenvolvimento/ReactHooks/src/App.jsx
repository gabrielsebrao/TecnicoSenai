import { act, useState } from 'react'
import './App.css'
import ListaTarefas from './components/ListaTarefas'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaTarefas />
    </>
  )
}

export default App
