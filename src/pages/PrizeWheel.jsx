import React, { useState } from 'react'
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
  const angle = '480deg'
  const [wheelEndPos, setWheelEndPos] = useState('180deg')

  function handleClick () {
    if (coins > 0) {
      setCoins(coins - 1)
      const wheel = document.querySelector('.wheel')
      wheel.classList.add('spinning')
      const positions = 8
      const additionalTurns = Math.floor((Math.random() * 10) + 1)
      const result = Math.floor(Math.random() * positions)
      const angle = (result * (360 / positions) + (additionalTurns) * 360).toString()
      setTimeout(() => {
        wheel.classList.remove('spinning')
        setWheelEndPos(`${angle}deg`)
      }, 5000)
    }
  }
  const style = {
    '--spinEnd': `${wheelEndPos}`
  }
  console.log(style)

  return (
    <div className='prize-wheel'>
      <h1>La Routourne</h1>
      {<Pot coins={coins}/>}
      <div className="wheel-container">
        <img className='pin' src={Pin} alt='pin' />
        <img className='wheel' style={style} src={Wheel} alt='wheel' data-spin={angle}/>
      </div>
      <button className='btn-wheel' onClick={handleClick}>Tourner !</button>
      <HomeButton />
    </div>
  )
}

export default PrizeWheel
