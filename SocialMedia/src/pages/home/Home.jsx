import React from 'react'
import './Home.css'
import Profileside from '../../components/profileSide/Profileside'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
const Home = () => {
  return (
    <div className="Home">
      <Profileside />
      <PostSide />
<RightSide />
    </div>
  )
}

export default Home