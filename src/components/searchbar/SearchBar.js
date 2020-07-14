import React, {useState} from 'react'
import logo from '../pictures/logo.png'
import './style.css'
//import icons
import {Camera, Instagram, Search} from 'react-feather'

const SearchBar = ({inputValue, onChange}) => {
  return (
    <React.Fragment>
      <div className="searchBar">
        <img src={logo} alt="Logo" className="skilldarImg" />
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className="definitionDiv">
      #VFXengineers are beings who create illusions or visual tricks used in the film, television, theatre, video game and similar  industries to simulate the imagined events in a story or virtual world.
      </div>
    </React.Fragment>
  )
}
export default SearchBar
