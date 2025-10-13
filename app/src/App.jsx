import { useState } from 'react'
import polarisLogo from './assets/polaris-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://docs.google.com/document/d/1pB1V0KfhygnHu9aCYTpEDBGfPTfwxd2ULB5c9Q6GGnU" target="_blank">
          <img src={polarisLogo} className="logo polaris" alt="Polaris logo" />
        </a>
      </div>
      <h1>Bem-vindo à Polaris!</h1>
      <div className="card">
        <p>
          Clique na logo para saber mais sobre nossa missão!
        </p>
      </div>
      <p className="read-the-docs">
       Polaris: mostrando o caminho para um futuro melhor.
      </p>
    </>
  )
}

export default App
