import React, { useContext } from 'react'
import Coin from '../assets/coin.svg'
import { AppContext } from '../App'

const Pot = () => {
  const context = useContext(AppContext)

  return (
    <div className="pot">
      <span className='pot-title'>Cagnotte</span>
      <div className="pot-content">
        <span className='pot-amount'>{context.coins}</span>
        <img className='coin-icon' src={Coin} alt='coin'/>
      </div>
    </div>
  )
}

export default Pot
