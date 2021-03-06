import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pot from '../components/Pot'
import HomeButton from '../components/HomeButton'
import Wheel from '../assets/wheel_3.svg'
import Pin from '../assets/pin_3.svg'
import Lever from '../assets/lever.svg'
import { v4 } from 'uuid'

console.log(Lever)
const prizePool = [
  {
    prize: 'ticket',
    quantity: 0,
    content: 'billet pour Deep Purple'
  },
  {
    prize: 'beer',
    quantity: 0,
    content: 'bière'
  },
  {
    prize: 'bomb',
    quantity: 0,
    content: 'BOOM !'
  },
  {
    prize: 'tada',
    quantity: 0,
    content: 'joyeux anniversaire !'
  },
  {
    prize: 'hike',
    quantity: 0,
    content: 'rando dans la nature'
  },
  {
    prize: 'ball',
    quantity: 0,
    content: 'prédiction gratuite'
  },
  {
    prize: 'burger',
    quantity: 0,
    content: 'repas maison'
  },
  {
    prize: 'bike',
    quantity: 0,
    content: 'balade en moto'
  }
]

const PrizeWheel = ({ jackpotWon, setJackpotWon, coins, setCoins }) => {
  PrizeWheel.propTypes = {
    coins: PropTypes.number,
    setCoins: PropTypes.func,
    jackpotWon: PropTypes.bool,
    setJackpotWon: PropTypes.func
  }

  function spinWheel () {
    const wheelPositions = 8
    const spinNumber = Math.floor(Math.random() * wheelPositions)
    const additionalTurns = Math.floor((Math.random() * 10) + 1)
    return (spinNumber * (360 / wheelPositions) + (additionalTurns * 360))
  }

  function computeOscillationIteration (wheelSpin) {
    return (wheelSpin / 45) - 1
  }

  function computeOscillationSpeed (animationTimer, wheelSpin) {
    return (animationTimer / 1000) / (wheelSpin / 45)
  }

  const [wheelEndPos, setWheelEndPos] = useState(0)
  const [oscillationIteration, setOscillationIteration] = useState(0)
  const [oscillationSpeed, setOscillationSpeed] = useState(0)

  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)
  const [prizesWon, setPrizesWon] = useState(prizePool)

  function computePrizeIndex (wheelSpin) {
    switch (wheelSpin % 360) {
      case 0: return 0
      case 45: return 1
      case 90: return 2
      case 135: return 3
      case 180: return 4
      case 225: return 5
      case 270: return 6
      case 315: return 7
    }
  }

  function storePrizes (index) {
    const newPrizesWon = prizesWon
    newPrizesWon[index].quantity += 1
    setPrizesWon(newPrizesWon)
  }

  function handleClick () {
    if (isAnimationPlaying) return

    const wheel = document.querySelector('.wheel')
    const pin = document.querySelector('.pin')
    const lever = document.querySelector('.lever')

    if (coins > 0) {
      let wheelSpin = spinWheel()
      if (jackpotWon && wheelSpin % 360 === 0) {
        console.log('jackpot avoided')
        wheelSpin += [45, -45][Math.round((Math.random()))]
      }
      if (coins === 1 && !jackpotWon) wheelSpin = 2520
      if (wheelSpin % 360 === 0) setJackpotWon(true)
      const pinAnimationTimer = 4000
      const wheelAnimationTimer = 5000
      setCoins(coins - 1)
      setIsAnimationPlaying(true)
      setWheelEndPos(wheelSpin)
      setOscillationSpeed(computeOscillationSpeed(pinAnimationTimer, wheelSpin))
      setOscillationIteration(computeOscillationIteration(wheelSpin))

      wheel.classList.add('spinning')
      pin.classList.add('oscillate')
      lever.classList.add('lvr-active')
      setTimeout(() => {
        pin.classList.remove('oscillate')
        lever.classList.remove('lvr-active')
      }, pinAnimationTimer)

      setTimeout(() => {
        wheel.classList.remove('spinning')

        storePrizes(computePrizeIndex(wheelSpin))
        setIsAnimationPlaying(false)
      }, wheelAnimationTimer)
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
    <div className='prize-wheel-page'>
      <h1>La Routourne</h1>
      <div className='prize-pot'>
        {<Pot coins={coins}/>}
      </div>

      <div className="prize-wheel-container">
      <ul className="prizes-won">{ prizesWon.map(prize => { return <li className='prize-line' key={v4()}><span className='prize-quantity'>{prize.quantity}</span><span className='prize-content'>{prize.content}</span></li> }) }</ul>

        <div className="wheel-wrapper">
          <div className="wheel-container">
            <img className='lever' src={Lever} alt='lever' onClick={handleClick}/>
            <img className='pin' style= {pinStyle} src={Pin} alt='pin' />
            <img className='wheel' style={wheelStyle} src={Wheel} alt='wheel'/>
          </div>
        </div>

      </div>
      <HomeButton />
    </div>
  )
}

export default PrizeWheel
