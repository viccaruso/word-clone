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
        id="guess-input"
        type="text"
        value={guessCandidate}
        onChange={(event) => {
          setGuessCandidate(event.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
