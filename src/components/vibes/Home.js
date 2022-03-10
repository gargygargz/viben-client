import React from 'react'
import Background from '../../images/palm_leaves.jpg'
import './Home.css'

const Home = () => (
  <div className='home-container'>
    <img className='background-image' src={Background} />
    <h1>Your Vibe Central</h1>
  </div>
)

export default Home

// import React from 'react'
// import Background from '../../images/palm_leaves.jpg'
// import './Home.css'
// import Vibes from './Vibes'

// const Home = (props) => {
//   if (props.user) {
//     return (
//       <Vibes />
//     )
//   }
//   return (
//     <div className='home-container'>
//         <img className='background-image' src={Background} />
//         <h1>Your Vibe Central</h1>
//       </div>
//   )
// }

// export default Home
