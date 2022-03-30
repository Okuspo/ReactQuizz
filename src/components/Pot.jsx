import React from 'react'
import Coin from '../assets/coin.svg'

const Pot = () => {
  return (
    <div className="pot">
      <span className='pot-title'>Cagnotte</span>
      <div className="pot-content">
        <span className='pot-amount'>12</span>
        <img className='coin-icon' src={Coin} alt='coin'/>
      </div>
    </div>
  )
}

export default Pot
