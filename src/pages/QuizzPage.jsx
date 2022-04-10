import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { questions } from '../database/questions'
import Pot from '../components/Pot'
import BlindTest from '../components/QuestionTypes/BlindTest'
import TrueFalse from '../components/QuestionTypes/TrueFalse'
import Text from '../components/QuestionTypes/Text'
import HomeButton from '../components/HomeButton'
import ProgressBar from '../components/ProgressBar'
import SaveGame from '../components/SaveGame'

const QuizzPage = ({ saveGame, setSaveGame, progress, setProgress, coins, setCoins }) => {
  QuizzPage.propTypes = {
    coins: PropTypes.number,
    setCoins: PropTypes.func,
    progress: PropTypes.object,
    setProgress: PropTypes.func,
    saveGame: PropTypes.number,
    setSaveGame: PropTypes.func
  }
  const { id } = useParams()

  const questionType = questions[id].type
  const limit = questions.length - 1
  return (
    <div className='quizz-page'>
        <h1 className='quizz-h1'>{questions[id].h1}</h1>
      <Pot coins={coins}/>
        { questionType === 'blindtest' &&
        <BlindTest
        question={questions[id]}
        progress={progress}
        setProgress={setProgress}
        coins={coins}
        setCoins={setCoins}
        limit={limit}
        saveGame={saveGame}
        setSaveGame={setSaveGame}
        /> }
        { questionType === 'truefalse' &&
         <TrueFalse
         question={questions[id]}
         progress={progress}
         setProgress={setProgress}
         coins={coins}
         setCoins={setCoins}
         limit={limit}
         saveGame={saveGame}
         setSaveGame={setSaveGame}
         /> }
        { questionType === 'text' &&
        <Text
        question={questions[id]}
        progress={progress}
        setProgress={setProgress}
        coins={coins}
        setCoins={setCoins}
        limit={limit}
        saveGame={saveGame}
        setSaveGame={setSaveGame}
        /> }
        <ProgressBar progress={progress} setProgress={setProgress}/>
        <SaveGame coins={coins} saveGame={saveGame} progress={progress}/>
      <HomeButton />
    </div>
  )
}

export default QuizzPage
