import React from 'react'
import { useParams } from 'react-router-dom'
import { questions } from '../database/questions'
import Pot from '../components/Pot'
import BlindTest from '../components/QuestionTypes/BlindTest'
import TrueFalse from '../components/QuestionTypes/TrueFalse'
import Text from '../components/QuestionTypes/Text'
import HomeButton from '../components/HomeButton'
import ProgressBar from '../components/ProgressBar'
import SaveGame from '../components/SaveGame'

const QuizzPage = () => {
  const { id } = useParams()
  const questionType = questions[id].type
  const limit = questions.length - 1
  return (
    <div className='quizz-page'>
      <h1 className='quizz-h1'>{questions[id].h1}</h1>
      <Pot/>
      { questionType === 'blindtest' && <BlindTest question={questions[id]} limit={limit} /> }
      { questionType === 'truefalse' && <TrueFalse question={questions[id]} limit={limit} /> }
      { questionType === 'text' && <Text question={questions[id]} limit={limit} /> }
      <ProgressBar />
      <SaveGame />
      <HomeButton />
    </div>
  )
}

export default QuizzPage
