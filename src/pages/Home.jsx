import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
  <div className='home'>
    <h1 className='home-h1'>MEGA QUIZZ</h1>
    <NavLink to='/quizz/0'
    className='go-button-container'>
      <div className='go-button'>
        <span>Go!</span>
      </div>
    </NavLink>
    <NavLink to='/prizewheel' className='prizewheel-container'>
      <div className='prizewheel-button'>
        <span>Routourne</span>
      </div>
    </NavLink>
  </div>
  )
}

export default Home
