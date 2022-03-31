import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Text = ({ question, coins, setCoins, limit }) => {
  const { id } = useParams()
  const idInt = parseInt(id)
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  Text.propTypes = {
    question: PropTypes.object,
    coins: PropTypes.number,
    setCoins: PropTypes.func,
    limit: PropTypes.number
  }

  function handleClick () {
    let addedCoin
    input.toLowerCase() === question.answer ? addedCoin = 1 : addedCoin = 0
    setCoins(coins + addedCoin)
    idInt === limit ? navigate('/gameover') : navigate(`/quizz/${idInt + 1}`)
  }

  return (
    <div className="question-wrapper text-question">
      <div className="question-container">
        {question.content}
      </div>
      <div className="controls-container">
        <input className='text-input' type='text' value={input} onInput={ e => setInput(e.target.value)}></input>
        <button className='btn-check' onClick={handleClick}><FontAwesomeIcon icon={faCheck} /></button>
      </div>
    </div>
  )
}

export default Text
