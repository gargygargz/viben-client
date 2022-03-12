import React from 'react'
import Background from '../../images/palm_leaves.jpg'
import './Home.css'

const Home = () => (
  <div className='home-container'>
    <img className='background-image' src={Background} />
    <h1>Connect. Share. Vibe.</h1>
  </div>
)

export default Home
