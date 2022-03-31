import React from 'react'
import PropTypes from 'prop-types'
import Coin from '../assets/coin.svg'

const Pot = ({ coins }) => {
  Pot.propTypes = {
    coins: PropTypes.number
  }

  return (
    <div className="pot">
      <span className='pot-title'>Cagnotte</span>
      <div className="pot-content">
        <span className='pot-amount'>{coins}</span>
        <img className='coin-icon' src={Coin} alt='coin'/>
      </div>
    </div>
  )
}

export default Pot
