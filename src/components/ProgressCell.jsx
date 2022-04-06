import React from 'react'
import PropTypes from 'prop-types'

const ProgressCell = ({ result, question }) => {
  ProgressCell.propTypes = {
    result: PropTypes.string,
    question: PropTypes.number
  }
  return (
  <div className={`progress-cell ${result}-cell`}>
    {question + 1}
  </div>
  )
}

export default ProgressCell
