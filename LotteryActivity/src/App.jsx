import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery  from './Lottery.jsx'
import Lottery2 from './Lottery2.jsx'
import { sum } from './helper.js'

function App() {
  
 let winCondition= (ticket)=>{
    return sum(ticket) === 15;
 }
  return (
    <>
    <Lottery2 n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
