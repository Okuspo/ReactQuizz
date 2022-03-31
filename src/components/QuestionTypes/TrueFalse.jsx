import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TrueFalse = ({ question, coins, setCoins, limit }) => {
  const { id } = useParams()
  const idInt = parseInt(id)
  const navigate = useNavigate()
  TrueFalse.propTypes = {
    question: PropTypes.object,
    coins: PropTypes.number,
    setCoins: PropTypes.func,
    limit: PropTypes.number
  }

  function handleClick (e) {
    let answer, addedCoin
    e.target.value === 'true' ? answer = true : answer = false
    answer === question.answer ? addedCoin = 1 : addedCoin = 0
    setCoins(coins + addedCoin)
    idInt === limit ? navigate('/gameover') : navigate(`/quizz/${idInt + 1}`)
  }

  return (
    <div className='question-wrapper true-false'>
      <div className="question-container">
        {question.content}
      </div>
      <div className="buttons-container">
        <button className='button btn-true' value='true' onClick={handleClick}>VRAI</button>
        <button className='button btn-false' value='false' onClick={handleClick}>FAUX</button>
      </div>
    </div>
  )
}

export default TrueFalse
