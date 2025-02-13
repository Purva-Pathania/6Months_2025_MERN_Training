import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee from './Components/Employee'
import Student from './Components/Student'

function App() {
  return (
    <div>
      <Employee/>
      <Employee/>
      <Employee/>
      <Student/>
      <Student/>
    </div>
  )
}

export default App
