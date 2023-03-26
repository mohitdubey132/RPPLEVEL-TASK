import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Landin = () => {
    let navigate = useNavigate();
  return (
    <div><button onClick={()=>navigate('/signin')}>sign in</button> 
          <button onClick={()=>navigate('/register')}>Register</button> 
          <button onClick={()=>navigate('/books')}>books</button>   
     </div>
  )
}

export default Landin