import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

const SaveGame = () => {
  const [saveKey, setSaveKey] = useState('')
  const context = useContext(AppContext)

  function generateSaveKey () {
    const regex = /[,]/g
    const coinsKey = String.fromCharCode(context.coins + 65)
    const saveKey = String.fromCharCode(context.saveGame + 65)
    const progressKey = context.progress.answers.map(answer => { return answer === true ? '9' : '5' }).toString().replace(regex, '')
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
