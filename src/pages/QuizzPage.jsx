import React from 'react'
import { useParams } from 'react-router-dom'
import Pot from '../components/Pot'
import BlindTest from '../components/QuestionTypes/BlindTest'
import TrueFalse from '../components/QuestionTypes/TrueFalse'
import Text from '../components/QuestionTypes/Text'
import PropTypes from 'prop-types'
import HomeButton from '../components/HomeButton'
import { questions } from '../database/questions'

const QuizzPage = ({ coins, setCoins }) => {
  QuizzPage.propTypes = {
    coins: PropTypes.number,
    setCoins: PropTypes.func
  }
  const { id } = useParams()

  const questionType = questions[id].type
  const limit = questions.length - 1
  return (
    <div className='quizz-page'>
        <h1 className='quizz-h1'>{questions[id].h1}</h1>
      <Pot coins={coins}/>
        { questionType === 'blindtest' && <BlindTest question={questions[id]} coins={coins} setCoins={setCoins} limit={limit}/> }
        { questionType === 'truefalse' && <TrueFalse question={questions[id]} coins={coins} setCoins={setCoins} limit={limit}/> }
        { questionType === 'text' && <Text question={questions[id]} coins={coins} setCoins={setCoins} limit={limit}/> }
      <HomeButton />
    </div>
  )
}

export default QuizzPage
