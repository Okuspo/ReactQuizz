import React from 'react'
import PropTypes from 'prop-types'
import Coin from '../assets/coin.svg'
import { NavLink } from 'react-router-dom'
import HomeButton from '../components/HomeButton'
import WheelIcon from '../assets/wheel_icon.svg'

const GameOver = ({ coins }) => {
  GameOver.propTypes = {
    coins: PropTypes.number
  }

  return (
    <div className="game-over">
      <h1 className='game-over-h1'>Bien joué !</h1>
      <div className="game-over-container">
        <span className='game-over-congrats'>Vous avez gagné</span>
        <div className='go-pot'>
          <span id='go-coin-amount'>{coins}</span>
          <img src={Coin} alt='pièces'/></div>
        <span className='game-over-congrats'>C&apos;est le moment de réclamer vos prix !</span>
        <NavLink to='/prizewheel' className='prizewheel-button'>
          <span>La Routourne</span>
          <img src={WheelIcon} alt='wheel icon'/>
        </NavLink>
        <HomeButton />
      </div>
    </div>
  )
}

export default GameOver
