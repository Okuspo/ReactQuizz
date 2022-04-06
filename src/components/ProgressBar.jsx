import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import ProgressCell from './ProgressCell'

const ProgressBar = ({ progress }) => {
  ProgressBar.propTypes = {
    progress: PropTypes.object
  }

  const progressBarArray = [...Array(progress.count).keys()]
  return (
    <div className="progress-bar-container">
      {
        progressBarArray.map(question => {
          return (
          <div key={v4()}>
            { progress.answers[question] === true && <ProgressCell question={question} result={'true'} /> }
            { progress.answers[question] === false && <ProgressCell question={question} result={'false'} /> }
            { progress.answers[question] === undefined && <ProgressCell question={question} result={'todo'} /> }
          </div>
          )
        })}

    </div>

  )
}

export default ProgressBar
