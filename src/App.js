import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import MainPage from './components/mainPage/MainPage'
import SearchBar from './components/searchbar/SearchBar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage/>
    </div>
  )
}

export default App
