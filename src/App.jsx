import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import GameOver from './pages/GameOver'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrizeWheel from './pages/PrizeWheel'
import QuizzPage from './pages/QuizzPage'

function App () {
  const [coins, setCoins] = useState(5)
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quizz/:id' element={<QuizzPage coins={coins} setCoins={setCoins} />} />
          <Route path='/prizewheel' element={<PrizeWheel coins={coins} setCoins={setCoins} />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/gameover' element={<GameOver coins={coins}/>} />
          <Route path='/ReactQuizz/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
