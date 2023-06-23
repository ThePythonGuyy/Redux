import { useState } from 'react'
import './App.css'
import CakeCotainer from './Components/CakeCotainer'
import HooksCakeContainer from './Components/HooksCakeContainer'
import HookCakeContainer2 from './Components/HooksCakeContatiner2'
import ItemContainer from './Components/ItemContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <CakeCotainer />
        <HooksCakeContainer />
        <HookCakeContainer2 />

        <ItemContainer cake />
        <ItemContainer  />

    </div>
  )
}

export default App
