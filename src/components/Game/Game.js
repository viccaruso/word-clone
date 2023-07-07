import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessTracker from '../GuessTracker/GuessTracker';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;
    const result = checkGuess(guess, answer);
    console.log(result);
    setGuesses([...guesses, result]);
  }
  return (
    <>
      <GuessTracker guesses={guesses} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
