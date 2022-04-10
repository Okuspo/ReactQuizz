import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../App'
import Next from '../../assets/arrow_next.svg'

const TrueFalse = ({ question, limit }) => {
  TrueFalse.propTypes = {
    question: PropTypes.object,
    limit: PropTypes.number
  }
  const context = useContext(AppContext)
  const { id } = useParams()
  const idInt = parseInt(id)
  const navigate = useNavigate()
  const questionSolved = context.saveGame > idInt

  function handleClick (e) {
    if (questionSolved) return
    context.setSaveGame(idInt + 1)
    let answer, addedCoin
    const newProgressAnswers = context.progress.answers
    e.target.value === 'true' ? answer = true : answer = false
    if (answer === question.answer) {
      addedCoin = 1
      newProgressAnswers.push(true)
    } else {
      addedCoin = 0
      newProgressAnswers.push(false)
    }
    const newProgress = context.progress
    newProgress.answers = newProgressAnswers
    context.setProgress(newProgress)
    context.setCoins(context.coins + addedCoin)

    if (idInt === limit) {
      context.setSaveGame(0)
      newProgress.answers = []
      context.setProgress(newProgress)
      navigate('/gameover')
    } else {
      navigate(`/quizz/${idInt + 1}`)
    }
  }

  return (
    <div className='question-wrapper true-false'>
      <div className="question-container">
        {question.content}
      </div>
      <div className="buttons-container">
        <button className={questionSolved ? 'button btn-true btn-inactive' : 'button btn-true'} value='true' onClick={handleClick}>VRAI</button>
        <button className={questionSolved ? 'button btn-false btn-inactive' : 'button btn-false'} value='false' onClick={handleClick}>FAUX</button>
      </div>
      {
        questionSolved &&
        <NavLink className='resume-link' to={`/quizz/${context.saveGame}`}>
          <img src={Next} alt='next-page'/>
        </NavLink>
      }
    </div>
  )
}

export default TrueFalse
