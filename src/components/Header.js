import React from 'react'
import logo from '../Images/Logo.png'
import Navbar from './Navbar'

const Header = () => {
  return (
		<header>
			<div className='logo'>
				<img src={logo} alt='logo' />
				<h1>Space Traveller's Hub</h1>
      </div>
      <Navbar />
		</header>
	)
}

export default Header