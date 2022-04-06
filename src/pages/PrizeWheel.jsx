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

  function spinWheel () {
    const wheelPositions = 8
    const spinNumber = Math.floor(Math.random() * wheelPositions)
    const additionalTurns = Math.floor((Math.random() * 10) + 1)
    return (spinNumber * (360 / wheelPositions) + (additionalTurns * 360)).toString()
  }

  function computeOscillationSpeed (numberOfSpins) {
    return 4 / (numberOfSpins / 45)
  }

  const firstSpin = spinWheel()
  const [wheelEndPos, setWheelEndPos] = useState(firstSpin)
  const [oscillationIteration, setOscillationIteration] = useState(computeOscillationSpeed(firstSpin))
  const [oscillationSpeed, setOscillationSpeed] = useState(4 / oscillationIteration)
  const [jackpotWon, setJackpotWon] = useState(false)
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)

  function handleClick () {
    if (isAnimationPlaying) return

    // Generate a number of spins
    let spins = spinWheel()

    if (coins > 0) {
      // Consume 1 coin to spin the wheel
      setCoins(coins - 1)
      const wheel = document.querySelector('.wheel')
      const spinBtn = document.querySelector('.btn-wheel')
      const pin = document.querySelector('.pin')
      wheel.classList.add('spinning')
      spinBtn.classList.add('btn-inactive')
      pin.classList.add('oscillate')
      setIsAnimationPlaying(true)

      setTimeout(() => {
        pin.classList.remove('oscillate')
        setOscillationSpeed(computeOscillationSpeed(spins))
      }, 4000)

      setTimeout(() => {
        wheel.classList.remove('spinning')
        spinBtn.classList.remove('btn-inactive')

        // Disables the cheat to give jackpot on last spin if already won
        if (spins % 360 === 0) setJackpotWon(true)

        // Rigs the prize wheel to give jackpot on last spin
        if (coins === 2 && !jackpotWon) spins = 2520

        setWheelEndPos(spins)
        setOscillationIteration((spins / 45) - 2)
        setIsAnimationPlaying(false)
      }, 5000)
    }
  }

  const wheelStyle = {
    '--spinEnd': `${wheelEndPos}deg`
  }
  const pinStyle = {
    '--oscillationSpeed': `${oscillationSpeed}s`,
    '--oscillationIteration': `${oscillationIteration}`
  }

  return (
    <div className='prize-wheel'>
      <h1>La Routourne</h1>
      {<Pot coins={coins}/>}
      <div className="wheel-container">
        <img className='pin' style= {pinStyle} src={Pin} alt='pin' />
        <img className='wheel' style={wheelStyle} src={Wheel} alt='wheel'/>
      </div>
      <button className='btn-wheel' onClick={handleClick}>Tourner !</button>
      <HomeButton />
    </div>
  )
}

export default PrizeWheel
