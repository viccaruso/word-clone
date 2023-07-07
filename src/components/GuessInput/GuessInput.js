import React from 'react';

function GuessInput({ handleGuess, gameStatus }) {
  const [guessCandidate, setGuessCandidate] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleGuess(guessCandidate);
    setGuessCandidate('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== 'in progress'}
        required
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="Must be 5 letters"
        id="guess-input"
        type="text"
        value={guessCandidate}
        onChange={(event) => {
          setGuessCandidate(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
