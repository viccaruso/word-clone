import React from 'react';
import GuessRow from '../GuessRow/GuessRow';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
function GuessTracker({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row, index) => (
        <GuessRow key={index} />
      ))}
    </div>
  );
}

export default GuessTracker;
