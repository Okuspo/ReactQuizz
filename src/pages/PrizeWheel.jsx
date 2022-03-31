import React from 'react'
import PropTypes from 'prop-types'
import Pot from '../components/Pot'
import HomeButton from '../components/HomeButton'

const PrizeWheel = ({ coins, setCoins }) => {
  PrizeWheel.propTypes = {
    coins: PropTypes.number,
    setCoins: PropTypes.func
  }
  return (
    <div className='prize-wheel'>
      <h1>Prizewheel - Work in progress</h1>
      {<Pot coins={coins}/>}
      <HomeButton />
    </div>
  )
}

export default PrizeWheel
