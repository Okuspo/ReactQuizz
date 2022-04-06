import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import WheelIcon from '../assets/wheel_icon.svg'

const Home = ({ saveGame }) => {
  Home.propTypes = {
    saveGame: PropTypes.number
  }
  return (
  <div className='home'>
    <h1 className='home-h1'>MEGA QUIZZ</h1>
    <NavLink to={`/quizz/${saveGame}`}
    className='go-button-container'>
      <div className='go-button'>
        <span>Go!</span>
      </div>
    </NavLink>
    <div className='prizewheel-container'>
      <NavLink to='/prizewheel' className='prizewheel-button'>
        <span>La Routourne</span>
        <img src={WheelIcon} alt='wheel icon'/>
      </NavLink>
    </div>
  </div>
  )
}

export default Home
