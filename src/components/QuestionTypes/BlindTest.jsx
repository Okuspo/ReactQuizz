import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import ReactHowler from 'react-howler/lib/ReactHowler'
import Next from '../../assets/arrow_next.svg'
import { AppContext } from '../../App'

const BlindTest = ({ question, limit }) => {
  BlindTest.propTypes = {
    question: PropTypes.object,
    limit: PropTypes.number
  }
  const { coins, progress, saveGame, setSaveGame, setCoins, setProgress } = useContext(AppContext)

  const { id } = useParams()
  const idInt = parseInt(id)
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [isPlaying, setisPlaying] = useState(false)
  const questionSolved = saveGame > idInt

  function handleSubmit (e) {
    e.preventDefault()
    if (questionSolved) return
    setSaveGame(idInt + 1)
    let addedCoin
    const newProgressAnswers = progress.answers
    if (input.toLowerCase() === question.answer) {
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
      setInput('')
      navigate(`/quizz/${idInt + 1}`)
    }
    if (isPlaying) setisPlaying(false)
  }

  function handlePlayerClick () {
    setisPlaying(!isPlaying)
  }

  return (
    <div className="question-wrapper blind-test">
      <div className="question-container">
        <ReactHowler src={question.content} playing={isPlaying} onEnd={() => setisPlaying(false)}/>
        <button className='player-button' onClick={handlePlayerClick}>
          {!isPlaying && <FontAwesomeIcon className='player-button-icon' icon={faPlay}/>}
          {isPlaying && <FontAwesomeIcon className='player-button-icon' icon={faPause}/>}
        </button>
      </div>
      <form className="controls-container" onSubmit={handleSubmit}>
        <input className='text-input' type='text' value={input} onInput={e => setInput(e.target.value)}></input>
        <button className={questionSolved ? 'btn-check btn-inactive' : 'btn-check'} type='submit'><FontAwesomeIcon icon={faCheck} /></button>
      </form>
      {
        questionSolved &&
        <NavLink className='resume-link' to={`/quizz/${saveGame}`}>
          <img src={Next} alt='next-page'/>
        </NavLink>
      }
    </div>
  )
}

export default BlindTest
