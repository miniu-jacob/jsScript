import React from 'react'
import { useNavigate } from 'react-router';

const Profile = () => {
  const navigate = useNavigate();
  const goToAbout = () => { 
    navigate('/About');
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={goToAbout} >Move About Page </button> 
      
    </div>
  )
}

export default Profile
