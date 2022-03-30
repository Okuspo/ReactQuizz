import React from 'react'
import QuizzHeader from '../layout/QuizzHeader'

const quizzQuestion = {
  id: 1,
  h1: 'VRAI OU FAUX ?',
  question: 'Un pigeon',
  type: 'trueOrFalse',
  answer: true,
  file: ''
}

const blindTestQuestion = {
  id: 2,
  h1: 'TROUVE LE TITRE',
  question: '',
  type: 'blindtest',
  answer: 'thunder',
  file: ''
}

const textQuestion = {
  id: 2,
  h1: 'TROUVE LE TITRE',
  question: 'Quelle est la capitale de la France ?',
  type: 'blindtest',
  answer: 'paris',
  file: ''

}

const questions = [quizzQuestion, blindTestQuestion, textQuestion]

console.log(questions)
/*

ID question = id page

vérifier type question : changer display de la page : 3 sous composants

*/

const QuizzPage = () => {
  return (
    <div className='quizz-page'>
      <QuizzHeader />
    </div>
  )
}

export default QuizzPage
