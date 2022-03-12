import React from 'react'
import Background from '../../images/palm_leaves.jpg'
import './Home.css'
import Words from '../../images/home_slogan.png'

const Home = () => (
  <div className='home-container'>
    <img className='background-image' src={Background} alt='palm leaves' />
    {/* <h1>Connect. Share. get Viben.</h1> */}
    <img className='home-slogan' src={Words} alt='palm leaves' />
  </div>
)

export default Home
