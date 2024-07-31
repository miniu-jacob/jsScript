import React from 'react'
import { useNavigate } from 'react-router';

const About = () => {
    const navigate = useNavigate();
    const goToHomepage = () => {
      navigate('/');
      // <Route>, <Link> 말고 클릭으로 이동하는 경우도 있다. 
      // 네비게이터를 이용한다. 

    }

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={goToHomepage}>Go to Homepage</button> 
    </div>
  )
}

export default About

