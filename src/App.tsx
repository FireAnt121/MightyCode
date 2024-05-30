import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './globals.css'
import Dashboard from './containers/Dashboard'
import { Login } from '@/containers/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* routing */}
      <Login />
    </>
  )
}

export default App
