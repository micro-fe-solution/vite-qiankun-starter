import { useState } from 'react'
import {
  useOutlet
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const outlet = useOutlet()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {outlet}
      <div id="subapp-container"></div>
    </div>
  )
}

export default App
