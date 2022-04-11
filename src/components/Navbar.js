import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav>
			<ul className='navlist'>
				<li>
					<NavLink to='/' className={isActive => (isActive ? 'active' : 'none')}>
						Rockets
					</NavLink>
				</li>
				<li>
					<NavLink to='/missions' className={isActive => (isActive ? 'active' : 'none')}>
						Missions
					</NavLink>
				</li>
				|
				<li>
					<NavLink to='/profile' className={isActive => (isActive ? 'active' : 'none')}>
						My Profile
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
