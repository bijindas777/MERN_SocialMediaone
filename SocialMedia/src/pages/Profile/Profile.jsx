import React from 'react'
import './Profile.css'
import PostSide from '../../components/PostSide/PostSide'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
  return (
<div className="Profile">
  <ProfileLeft/>
  <div className="Profile-center">
    <ProfileCard location = "profilePage" />
  </div>
  <div className='Profile-center2'>
    <PostSide/>
  </div>
  <div className='Profile-right'>
  <RightSide/>
  </div>
</div>  )
}

export default Profile