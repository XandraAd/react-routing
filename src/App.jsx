import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBars from './components/NavBars'
import Routing from './components/Routing'

const App=()=> {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
    <NavBars/>
    <Routing/>
    </>
  )
}

export default App
