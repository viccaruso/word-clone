import React from 'react';

function GuessInput() {
  const [guessCandidate, setGuessCandidate] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess: guessCandidate });
        setGuessCandidate('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
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
