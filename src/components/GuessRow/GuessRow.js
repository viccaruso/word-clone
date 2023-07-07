import React from 'react';
import { WORD_LENGTH } from '../../constants';
import { range } from '../../utils';
function GuessRow({ guessResult = '' }) {
  return (
    <>
      <p className="guess">
        {range(WORD_LENGTH).map((_, index) => (
          <span key={index} className={`cell ${guessResult[index]?.status}`}>
            {guessResult[index]?.letter}
          </span>
        ))}
      </p>
    </>
  );
}

export default GuessRow;
