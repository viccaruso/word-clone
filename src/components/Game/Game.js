import React from 'react';
import GuessInput from '../GuessInput/GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessTracker from '../GuessTracker/GuessTracker';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  }
  return (
    <>
      <GuessTracker guesses={guesses} />
      <GuessInput handleSubmit={handleGuess} />
    </>
  );
}

export default Game;
