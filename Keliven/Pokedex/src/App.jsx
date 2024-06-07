import './App.css'
import Pokedex from './components/Pokedex'
import { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid black;
  border-top: 4px solid red;
  border-radius: 50%;
`

function App() {

  const [Carregando, setCarregando] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
      setCarregando(false)
      }, 3000)
      return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {Carregando ? (
          <Spinner
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
          />
        ):(
          <div>
            <Pokedex />
          </div>
        )
      }
    </>
  )
}

export default App
