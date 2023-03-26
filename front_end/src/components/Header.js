import React from 'react'
import toast, { Toaster } from "react-hot-toast";
import { Link  } from "react-router-dom";
const sucessNotify = () => toast.success("send email!");
const Header = () => {
  return (
    <>
      <nav>
        <NavContent />
        <Toaster />
      </nav>
    </>
  )
}
const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Mohit.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#Home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        TimeLine
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
      <Link to="/signIn">Login</Link>
      <Link to="/register">Signup</Link>
    </div>
    
    <a href="mailto:mohitdubey1322001@gmail.com" onFocus={sucessNotify}>
      <button onClick={sucessNotify}>Email</button>
    </a>
  </>
);

export default Header