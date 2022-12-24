import React from 'react'
import Logo from '../../img/logobee.png'
import { UilSearch } from "@iconscout/react-unicons"
import './LogoSearch.css'


const LogoSearch = () => {
  return (
<div className="LogoSearch">
  <img className='img' src={Logo} alt="" />
  <div className="Search">
    <input className='exp' type="text" placeholder='#Explore' />
    <div className="s-icon">
      <UilSearch/>
    </div>
  </div>
</div>
    );
};

export default LogoSearch