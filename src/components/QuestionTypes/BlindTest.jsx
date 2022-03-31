import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Music from '../../assets/audiotest.mp3'
import ReactHowler from 'react-howler/lib/ReactHowler'

const BlindTest = ({ question, coins, setCoins, limit }) => {
  BlindTest.propTypes = {
    question: PropTypes.object,
    coins: PropTypes.number,
    setCoins: PropTypes.func,
    limit: PropTypes.number
  }

  const { id } = useParams()
  const idInt = parseInt(id)
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [isPlaying, setisPlaying] = useState(false)

  function handleClick () {
    let addedCoin
    input.toLowerCase() === question.answer ? addedCoin = 1 : addedCoin = 0
    setCoins(coins + addedCoin)
    idInt === limit ? navigate('/gameover') : navigate(`/quizz/${idInt + 1}`)
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
      <div className="controls-container">
        <input className='text-input' type='text' value={input} onInput={e => setInput(e.target.value)}></input>
        <button className='btn-check' onClick={handleClick}><FontAwesomeIcon icon={faCheck}/></button>
      </div>
    </div>
  )
}

export default BlindTest
