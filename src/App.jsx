import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <div className='App'>
      <nav>
        <button className='botaoNav'>EU</button>/
        <button className='botaoNav'>PROJETOS</button>/
        <button className='botaoNav'>TECNOLOGIA</button>/
        <button className='botaoNav'>SENAC</button>
      </nav>
      </div>
      <div className='image-container'>
      <img className='euImg' src="/src/assets/eu.png"></img>
      <img className='ceuImg'src="/src/assets/ceu.png"></img>
      </div>
    </>
  )
}

export default App
