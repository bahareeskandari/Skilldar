import React, {useState} from 'react'
//import icons
import { Camera, Instagram, Search, Twitter } from 'react-feather';

const Navbar = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="navbar">
      <div className="navLinkLeft">Browse Skills</div>
      <div className="navLinkRight"><Instagram/><Twitter/>Login</div>
    </div>
  )
}
export default Navbar
