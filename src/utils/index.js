function decryptKeyCode (key) {
  const coins = key[0].charCodeAt(0) - 65
  const currentQuestion = key[1].charCodeAt(0) - 65
  const answers = key.substr(2).split('').map(char => char === '9')
  const saveGame = {
    coins: coins,
    currentQuestion: currentQuestion,
    answers: answers
  }
  return saveGame
}

class Utils {
  checkCodeIntegrity (save) {
    let correctAnswers = 0
    save.answers.forEach(answer => { if (answer === true) correctAnswers += 1 })
    if (save.currentQuestion !== save.answers.length) return false
    if (correctAnswers !== save.coins) return false
    return true
  }

  decryptKeyCode (key) {
    const coins = key[0].charCodeAt(0) - 65
    const currentQuestion = key[1].charCodeAt(0) - 65
    const answers = key.substr(2).split('').map(char => char === '9')
    const saveGame = {
      coins: coins,
      currentQuestion: currentQuestion,
      answers: answers
    }
    return saveGame
  }
}

export default Utils
export { decryptKeyCode }
