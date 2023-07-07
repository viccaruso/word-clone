import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessTracker from '../GuessTracker/GuessTracker';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('in progress');

  function handleGuess(guess) {
    const result = checkGuess(guess, answer);
    const nextGuesses = [...guesses, result];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus('win');
    } else if (
      nextGuesses.length === NUM_OF_GUESSES_ALLOWED &&
      guess !== answer
    ) {
      setGameStatus('lose');
    }
  }

  return (
    <>
      <GuessTracker guesses={guesses} />
      <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
      {gameStatus === 'win' && <WinBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lose' && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
