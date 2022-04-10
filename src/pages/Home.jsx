import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import WheelIcon from '../assets/wheel_icon.svg'

const Home = ({ saveGame, setSaveGame, progress, setProgress, setCoins }) => {
  const [input, setInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  Home.propTypes = {
    saveGame: PropTypes.number,
    setSaveGame: PropTypes.func,
    progress: PropTypes.object,
    setProgress: PropTypes.func,
    setCoins: PropTypes.func
  }

  function decryptKeyCode (key) {
    const coins = key[0].charCodeAt(0) - 65
    const currentQuestion = key[1].charCodeAt(0) - 65
    const answers = key.substr(2).split('').map(char => { return char === '9' })
    const saveGame = {
      coins: coins,
      currentQuestion: currentQuestion,
      answers: answers
    }
    return saveGame
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (input.length < 2) return
    const saveGame = decryptKeyCode(input)
    if (!checkCodeIntegrity(saveGame)) {
      setErrorMessage('Code invalide')
    } else {
      setSaveGame(saveGame.currentQuestion)
      setCoins(saveGame.coins)
      const newProgress = progress
      newProgress.answers = saveGame.answers
      setProgress(newProgress)
    }
  }

  function checkCodeIntegrity (saveGame) {
    console.log(saveGame)
    if (saveGame.currentQuestion !== saveGame.answers.length) return false
    let correctAnswers = 0
    saveGame.answers.forEach(answer => { if (answer === true) correctAnswers += 1 })
    console.log(correctAnswers, saveGame.coins)
    if (correctAnswers !== saveGame.coins) return false
    return true
  }

  return (
  <div className='home'>
    <h1 className='home-h1'>MEGA QUIZZ</h1>
    <NavLink to={`/quizz/${saveGame}`}
    className='go-button-container'>
      <div className='go-button'>
        <span>Go!</span>
      </div>
    </NavLink>
    <div className='prizewheel-container'>
      <NavLink to='/prizewheel' className='prizewheel-button'>
        <span>La Routourne</span>
        <img src={WheelIcon} alt='wheel icon'/>
      </NavLink>
    </div>
    <form className="resume-game" onSubmit={handleSubmit}>

      <input className='saveKey-input' placeholder='Code de sauvegarde ?' type='text' value={input} onInput={e => setInput(e.target.value)}></input>
      <span className='input-error'>{errorMessage}</span>
    </form>
  </div>
  )
}

export default Home
