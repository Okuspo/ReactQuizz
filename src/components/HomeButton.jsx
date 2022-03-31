import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const HomeButton = () => {
  return (
    <NavLink to='/' className='home-link'>
      <FontAwesomeIcon icon={faHouse}/>
    </NavLink>
  )
}

export default HomeButton
