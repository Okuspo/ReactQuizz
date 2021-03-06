import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import GameOver from './pages/GameOver'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrizeWheel from './pages/PrizeWheel'
import QuizzPage from './pages/QuizzPage'
import { questions } from './database/questions'

function App () {
  const [coins, setCoins] = useState(0)
  const [jackpotWon, setJackpotWon] = useState(false)
  const [saveGame, setSaveGame] = useState(0)
  const [progress, setProgress] = useState({
    count: questions.length,
    answers: []
  })

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home saveGame={saveGame} setSaveGame={setSaveGame} setCoins={setCoins} setProgress={setProgress} progress={progress}/>}/>
          <Route path='/quizz/:id' element={<QuizzPage progress={progress} setProgress={setProgress} coins={coins} setCoins={setCoins} saveGame={saveGame} setSaveGame={setSaveGame}/>} />
          <Route path='/prizewheel' element={<PrizeWheel coins={coins} setCoins={setCoins} jackpotWon={jackpotWon} setJackpotWon={setJackpotWon} />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/gameover' element={<GameOver coins={coins} />} />
          <Route path='/ReactQuizz/' element={<Home saveGame={saveGame}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
