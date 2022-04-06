import React from 'react'
import PropTypes from 'prop-types'

const prizeTickets = {
  name: '2 Billets pour Deep Purple'
}

const prizeBike = {
  name: '1 balade en moto'
}

const prizeBurger = {
  name: '1 rando dans la nature'
}

const prizeBeer = {
  name: '1 bière'
}

const prizeMountain = {
  name: '1 rando dans la nature'
}

const prizeCrystalBall = {
  name: '1 prédiction gratuite'
}

const prizeTada = {
  name: 'Joyeux anniversaire !'
}

const prizes = [prizeTickets, prizeBike, prizeBurger, prizeBeer, prizeMountain, prizeCrystalBall, prizeTada]

const PrizesWon = (props) => {
  PrizesWon.propTypes = {
    prizes: PropTypes.array
  }

  return (
    <div className="prizes-won">
      Prizes won
    </div>
  )
}

export default PrizesWon
