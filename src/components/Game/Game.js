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

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState('in progress');

  function handleGuess(guess) {
    const result = checkGuess(guess, answer);
    const nextGuesses = [...guesses, result];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus('win');
      setGameOver(true);
    } else if (
      nextGuesses.length === NUM_OF_GUESSES_ALLOWED &&
      guess !== answer
    ) {
      setGameStatus('lose');
      setGameOver(true);
    }
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
