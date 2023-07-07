import React from 'react';
import { WORD_LENGTH } from '../../constants';
import { range } from '../../utils';

function GuessRow({ guessResult = [] }) {
  return (
    <>
      <p className="guess">
        {range(WORD_LENGTH).map((_, index) => {
          const appliedClass = guessResult[index]
            ? `cell ${guessResult[index].status}`
            : 'cell';
          return (
            <span key={index} className={appliedClass}>
              {guessResult[index]?.letter}
            </span>
          );
        })}
      </p>
    </>
  );
}

export default GuessRow;
