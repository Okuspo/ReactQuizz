import React from 'react'
import PropTypes from 'prop-types'
import Pot from '../components/Pot'
import HomeButton from '../components/HomeButton'
import Wheel from '../assets/wheel.svg'
import Pin from '../assets/pin.svg'

const PrizeWheel = ({ coins, setCoins }) => {
  PrizeWheel.propTypes = {
    coins: PropTypes.number,
    setCoins: PropTypes.func
  }
  function handleClick () {
    if (coins > 0) {
      setCoins(coins - 1)
      const wheel = document.querySelector('.wheel')
      wheel.classList.add('spinning')
      setTimeout(() => {
        wheel.classList.remove('spinning')
      }, 4000)
    }
  }
  return (
    <div className='prize-wheel'>
      <h1>La Routourne</h1>
      {<Pot coins={coins}/>}
      <div className="wheel-container">
        <img className='pin' src={Pin} alt='pin' />
        <img className='wheel' src={Wheel} alt='wheel'/>
      </div>
      <button className='btn-wheel' onClick={handleClick}>Tourner !</button>
      <HomeButton />
    </div>
  )
}

export default PrizeWheel
