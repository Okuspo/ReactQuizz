import React, { useContext } from 'react'
import { v4 } from 'uuid'
import ProgressCell from './ProgressCell'
import { AppContext } from '../App'

const ProgressBar = () => {
  const context = useContext(AppContext)

  const progressBarArray = [...Array(context.progress.count).keys()]
  return (
    <div className="progress-bar-container">
      {
        progressBarArray.map(question => {
          return (
          <div key={v4()}>
            { context.progress.answers[question] === true && <ProgressCell question={question} result={'true'} /> }
            { context.progress.answers[question] === false && <ProgressCell question={question} result={'false'} /> }
            { context.progress.answers[question] === undefined && <ProgressCell question={question} result={'todo'} /> }
          </div>
          )
        })}

    </div>

  )
}

export default ProgressBar
