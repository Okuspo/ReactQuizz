import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import WheelIcon from '../assets/wheel_icon.svg'
import { AppContext } from '../App'
import { decryptKeyCode, checkCodeIntegrity } from '../utils/saveUtils'

const Home = () => {
  const [input, setInput] = useState('')
  const [saveGameMessage, setSaveGameMessage] = useState([false, ''])
  const { progress, saveGame, setSaveGame, setCoins, setProgress } = useContext(AppContext)

  function handleSubmit (e) {
    e.preventDefault()
    if (input.length < 2) return
    const save = decryptKeyCode(input)
    if (!checkCodeIntegrity(save)) {
      setSaveGameMessage([false, 'Code invalide'])
    } else {
      setSaveGame(save.currentQuestion)
      setCoins(save.coins)
      const newProgress = progress
      newProgress.answers = save.answers
      setProgress(newProgress)
      setSaveGameMessage([true, 'Code validé !'])
    }
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
      <input className='saveKey-input' type='text' placeholder='Code de sauvegarde ?' value={input} onInput={e => setInput(e.target.value)}></input>
      <span className={`savegame-message-${saveGameMessage[0]}`}>{saveGameMessage[1]}</span>
    </form>
  </div>
  )
}

export default Home
