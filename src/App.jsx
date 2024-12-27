import {useState} from 'react'
import './App.css'
import Home from "./pages/home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Home />
    </>
  )
}

export default App
