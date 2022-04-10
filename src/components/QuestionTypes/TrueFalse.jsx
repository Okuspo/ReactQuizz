import PropTypes from 'prop-types'
import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Next from '../../assets/arrow_next.svg'

const TrueFalse = ({ saveGame, setSaveGame, progress, setProgress, question, coins, setCoins, limit }) => {
  TrueFalse.propTypes = {
    question: PropTypes.object,
    coins: PropTypes.number,
    setCoins: PropTypes.func,
    limit: PropTypes.number,
    progress: PropTypes.object,
    setProgress: PropTypes.func,
    setSaveGame: PropTypes.func,
    saveGame: PropTypes.number
  }
  const { id } = useParams()
  const idInt = parseInt(id)
  const navigate = useNavigate()
  const questionSolved = saveGame > idInt

  function handleClick (e) {
    if (questionSolved) return
    setSaveGame(idInt + 1)
    let answer, addedCoin
    const newProgressAnswers = progress.answers
    e.target.value === 'true' ? answer = true : answer = false
    if (answer === question.answer) {
      addedCoin = 1
      newProgressAnswers.push(true)
    } else {
      addedCoin = 0
      newProgressAnswers.push(false)
    }
    const newProgress = progress
    newProgress.answers = newProgressAnswers
    setProgress(newProgress)
    setCoins(coins + addedCoin)

    if (idInt === limit) {
      setSaveGame(0)
      newProgress.answers = []
      setProgress(newProgress)
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
        <NavLink className='resume-link' to={`/quizz/${saveGame}`}>
          <img src={Next} alt='next-page'/>
        </NavLink>
      }
    </div>
  )
}

export default TrueFalse
