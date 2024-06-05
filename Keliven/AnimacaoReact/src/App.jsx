import './App.css'
import styled from 'styled-components'
import { motion, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import Conteudo from './components/Conteudo'

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid #000000;
  border-top: 4px solid red;
  border-radius: 50%;
`
function App() {
  const [Carregando, setCarregando] = useState(true)
  useEffect(() =>{
    const timer = setTimeout(() => {
      setCarregando(false)
    }, 5000)
    return () => clearTimeout(timer)
  },[])
  return (
    <>
      <div className='center'>
        {Carregando ? (
          <Spinner 
            animate= {{rotate: 360}}
            transition={{duration:0.1, repeat: Infinity, ease: 'linear'}}
          />
          ):(
            <Conteudo visivel={!Carregando}/>
          )
        }
        
      </div>
      
    </>
  )
}

export default App