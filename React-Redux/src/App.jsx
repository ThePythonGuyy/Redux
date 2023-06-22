import { useState } from 'react'
import './App.css'
import CakeCotainer from './Components/CakeCotainer'
import HooksCakeContainer from './Components/HooksCakeContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <CakeCotainer />
        <HooksCakeContainer />
    </div>
  )
}

export default App
