import React from 'react'
import './style.css'

const Select = ({handleOption, categories}) =>{
  return (
    <div className="select">
    <label className={`labelSelect`} for="category">Location</label>
      <select
        onChange={(e) => handleOption(e.target.value)}
        name="category"
        id="category"
      >
        {categories.map((option,idx) => (
          <option key={idx} value={option}>{option}</option>
        ))}
      </select>
    </div>

  )
}

export default Select
