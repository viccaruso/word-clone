import React from 'react';

function GameResultBanner({ answer, status, numOfGuesses }) {
  const bannerElement =
    status === 'win' ? (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      </div>
    ) : (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );

  return bannerElement;
}

export default GameResultBanner;
