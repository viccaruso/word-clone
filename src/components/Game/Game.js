import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessTracker from '../GuessTracker/GuessTracker';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameResultBanner from '../GameResultBanner/GameResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState('in progress');

  function handleGuess(guess) {
    if (guess === answer) {
      setGameStatus('win');
      setGameOver(true);
    } else if (
      guesses.length === NUM_OF_GUESSES_ALLOWED - 1 &&
      guess !== answer
    ) {
      setGameStatus('lose');
      setGameOver(true);
    }

    const result = checkGuess(guess, answer);
    console.log(result);
    setGuesses([...guesses, result]);
  }

  return (
    <>
      <GuessTracker guesses={guesses} />
      <GuessInput handleGuess={handleGuess} gameOver={gameOver} />
      {gameOver && (
        <GameResultBanner
          answer={answer}
          status={gameStatus}
          numOfGuesses={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
