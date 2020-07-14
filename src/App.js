import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import MainPage from './components/mainPage/MainPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage/>
      <Footer/>
    </div>
  )
}

export default App
