import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Music from '../../assets/audiotest.mp3'
import ReactHowler from 'react-howler/lib/ReactHowler'

const BlindTest = ({ setSaveGame, progress, setProgress, question, coins, setCoins, limit }) => {
  BlindTest.propTypes = {
    question: PropTypes.object,
    coins: PropTypes.number,
    setCoins: PropTypes.func,
    limit: PropTypes.number,
    progress: PropTypes.object,
    setProgress: PropTypes.func,
    setSaveGame: PropTypes.func
  }

  const { id } = useParams()
  const idInt = parseInt(id)
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [isPlaying, setisPlaying] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
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
        <ReactHowler src={Music} playing={isPlaying} onEnd={() => setisPlaying(false)}/>
        <button className='player-button' onClick={handlePlayerClick}>
          {!isPlaying && <FontAwesomeIcon className='player-button-icon' icon={faPlay}/>}
          {isPlaying && <FontAwesomeIcon className='player-button-icon' icon={faPause}/>}
        </button>
      </div>
      <form className="controls-container" onSubmit={handleSubmit}>
        <input className='text-input' type='text' value={input} onInput={e => setInput(e.target.value)}></input>
        <button className='btn-check' type='submit'><FontAwesomeIcon icon={faCheck}/></button>
      </form>
    </div>
  )
}

export default BlindTest
