import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getMissions } from '../redux/missions/mission'

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <nav>
      <ul className='navlist'>
        <li>
          <NavLink to='/' className={navlist => (navlist.isActive ? 'active' : 'none')}>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/missions'
            className={navlist => (navlist.isActive ? 'active' : 'none')}
            onClick={() => dispatch(getMissions())}
          >
            Missions
          </NavLink>
        </li>
        |
        <li>
          <NavLink to='/profile' className={navlist => (navlist.isActive ? 'active' : 'none')}>
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
