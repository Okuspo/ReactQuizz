import React from 'react'
import PropTypes from 'prop-types'
import Coin from '../assets/coin.svg'
import { useNavigate } from 'react-router-dom'
import HomeButton from '../components/HomeButton'

const GameOver = ({ coins }) => {
  const navigate = useNavigate()
  GameOver.propTypes = {
    coins: PropTypes.number
  }
  return (
    <div className="game-over">
      <h1 className='game-over-h1'>Bien joué !</h1>
      <div className="game-over-container">
        <span>Vous avez gagné</span>
        <div className='go-pot'>
          <span id='go-coin-amount'>{coins}</span>
          <img src={Coin} alt='pièces'/></div>
        <span>C&apos;est le moment de réclamer vos prix !</span>
        <button className='btn-goto-prize' onClick={() => navigate('/prizewheel')}>La routourne</button>
        <HomeButton />
      </div>
    </div>
  )
}

export default GameOver
