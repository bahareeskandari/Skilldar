import React from 'react'


const Select = ({handleOption, categories}) =>{
  return (
    <>
    <label className={`labelSelect`} for="category">Location</label>
      <select
        onChange={(e) => handleOption(e.target.value)}
        name="category"
        id="category"
        className={`select`}
      >

        {categories.map((option,idx) => (
          <option key={idx} value={option}>{option}</option>
        ))}
      </select>
    </>

  )
}

export default Select
