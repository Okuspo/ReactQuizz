import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Next from '../../assets/arrow_next.svg'
import { AppContext } from '../../App'

const Text = ({ question, limit }) => {
  Text.propTypes = {
    question: PropTypes.object,
    limit: PropTypes.number
  }

  const context = useContext(AppContext)

  const { id } = useParams()
  const idInt = parseInt(id)
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const questionSolved = context.saveGame > idInt

  function handleSubmit (e) {
    e.preventDefault()
    if (questionSolved) return
    context.setSaveGame(idInt + 1)
    let addedCoin
    const newProgressAnswers = context.progress.answers
    if (input.toLowerCase() === question.answer) {
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
    <div className="question-wrapper text-question">
      <div className="question-container">
        {question.content}
      </div>
      <form className="controls-container" onSubmit={handleSubmit}>
        <input className='text-input' type='text' value={input} onInput={ e => setInput(e.target.value)}></input>
        <button className={questionSolved ? 'btn-check btn-inactive' : 'btn-check'} type='submit'><FontAwesomeIcon icon={faCheck} /></button>
      </form>
      {
        questionSolved &&
        <NavLink className='resume-link' to={`/quizz/${context.saveGame}`}>
          <img src={Next} alt='next-page'/>
        </NavLink>
      }
    </div>
  )
}

export default Text
