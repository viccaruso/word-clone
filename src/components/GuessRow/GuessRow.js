import React from 'react';
import { WORD_LENGTH } from '../../constants';
import { range } from '../../utils';
function GuessRow({ word = '' }) {
  return (
    <>
      <p className="guess">
        {range(WORD_LENGTH).map((_, index) => (
          <span key={index} className="cell">
            {word[index]}
          </span>
        ))}
      </p>
    </>
  );
}

export default GuessRow;
