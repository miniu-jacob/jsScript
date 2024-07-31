import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to='/Profile' >Go to ProfilePage</Link> 
      <Link to='/About'>Go to About</Link>
      
    </div>
  )
}

export default Homepage
