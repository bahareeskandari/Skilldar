import React, {useState} from 'react'
//import icons
import { Camera, Instagram, Search } from 'react-feather';

const SearchBar = ({inputValue, onChange}) => {
  return (
    <div className="searchBar">
      <span class="dot"></span>
      <label>Skilldar</label>
      <input type="text" value={inputValue} onChange={(e) => onChange(e.target.value)}/>
      <img alt="hah" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" id="input_img" width="20" height="20"/>

    </div>
  )
}
export default SearchBar
