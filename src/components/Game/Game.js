import React from 'react';
import GuessInput from '../GuessInput/GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessTracker from '../GuessTracker/GuessTracker';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(['HELLO', 'THERE', 'WORLD']);

  function handleGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;
    const nextGuesses = [...guesses, guess];
    console.log(nextGuesses);
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
