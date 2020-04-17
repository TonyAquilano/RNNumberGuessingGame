import React from 'react'
import {Text} from 'react-native'
import {CheckGuessResult} from '../../../businessLogic/checkGuess'

interface Props {
  result: CheckGuessResult | null
  guess: number
}

export default ({result, guess}: Props) => {
  if (result === 'tooLow') {
    return <Text>{guess} is too low.</Text>
  }

  if (result === 'tooHigh') {
    return <Text>{guess} is too high.</Text>
  }

  if (result === 'correct') {
    return <Text>That's correct! 🎉</Text>
  }

  return <></>
}

/**
 * 
 * import React from 'react'
import {Text, Button} from 'react-native'
import {CheckGuessResult} from '../../../businessLogic/checkGuess'

interface Props {
  result: CheckGuessResult | null
  guess: number
  onResetGame: () => void
}
let ResultView = ({result, guess, onResetGame}: Props) => {
  if (result === 'tooLow') {
    return <Text>{guess} is too low.</Text>
  }

  if (result === 'tooHigh') {
    return <Text>{guess} is too high.</Text>
  }

  if (result === 'correct') {
    return (
      <>
        <Text>That's correct! 🎉</Text>
        <Button title="New Game" onPress={onResetGame} />
      </>
    )
  }

  return <></>
}

export default ResultView

 */
