import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SaveGame = ({ coins, saveGame, progress }) => {
  const [saveKey, setSaveKey] = useState('')

  SaveGame.propTypes = {
    coins: PropTypes.number,
    saveGame: PropTypes.number,
    progress: PropTypes.object
  }

  function generateSaveKey () {
    const regex = /[,]/g
    const coinsKey = String.fromCharCode(coins + 65)
    const saveKey = String.fromCharCode(saveGame + 65)
    const progressKey = progress.answers.map(answer => { return answer === true ? '9' : '5' }).toString().replace(regex, '')
    const key = `${coinsKey}${saveKey}${progressKey}`
    setSaveKey(key)
  }

  return (
    <div className="saveGame">
      <button className="button btn-save" onClick={generateSaveKey}>Sauvegarder</button>
      {saveKey !== '' ? <span className="save-key">Votre code de sauvegarde : {saveKey}</span> : ''}
    </div>
  )
}

export default SaveGame
