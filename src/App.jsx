import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PrizeWheel from './pages/PrizeWheel'
import QuizzPage from './pages/QuizzPage'

function App () {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quizz/:id' element={<QuizzPage />} />
          <Route path='/prizewheel' element={<PrizeWheel />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
