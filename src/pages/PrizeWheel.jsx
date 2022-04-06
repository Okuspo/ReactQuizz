import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pot from '../components/Pot'
import HomeButton from '../components/HomeButton'
import Wheel from '../assets/wheel_2.svg'
import Pin from '../assets/pin_2.svg'

const PrizeWheel = ({ coins, setCoins }) => {
  PrizeWheel.propTypes = {
    coins: PropTypes.number,
    setCoins: PropTypes.func
  }
  const [wheelEndPos, setWheelEndPos] = useState(spinWheel())
  const [jackpotWon, setJackpotWon] = useState(false)
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)

  function spinWheel () {
    const wheelPositions = 8
    const spinNumber = Math.floor(Math.random() * wheelPositions)
    const additionalTurns = Math.floor((Math.random() * 10) + 3)
    const result = (spinNumber * (360 / wheelPositions) + (additionalTurns * 360)).toString()
    return (`${result}deg`)
  }

  function handleClick () {
    if (isAnimationPlaying) return
    let spins = spinWheel()
    if (coins > 0) {
      setCoins(coins - 1)
      const wheel = document.querySelector('.wheel')
      const spinBtn = document.querySelector('.btn-wheel')
      wheel.classList.add('spinning')
      spinBtn.classList.add('btn-inactive')
      setIsAnimationPlaying(true)
      setTimeout(() => {
        wheel.classList.remove('spinning')
        spinBtn.classList.remove('btn-inactive')

        // Disables the cheat to give jackpot on last spin if already won
        if (spins % 360 === 0) setJackpotWon(true)

        // Rigs the prize wheel to give jackpot on last spin
        if (coins === 2 && !jackpotWon) spins = '2520deg'

        setWheelEndPos(spins)
        setIsAnimationPlaying(false)
      }, 8500)
    }
  }
  const style = {
    '--spinEnd': `${wheelEndPos}`
  }

  return (
    <div className='prize-wheel'>
      <h1>La Routourne</h1>
      {<Pot coins={coins}/>}
      <div className="wheel-container">
        <img className='pin' src={Pin} alt='pin' />
        <img className='wheel' style={style} src={Wheel} alt='wheel'/>
      </div>
      <button className='btn-wheel' onClick={handleClick}>Tourner !</button>
      <HomeButton />
    </div>
  )
}

export default PrizeWheel
