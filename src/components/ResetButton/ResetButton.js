import React from 'react';
import Button from '../Button/Button';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function ResetButton({ setAnswer, setGuesses, setGameStatus }) {
  function handleReset() {
    const newWord = sample(WORDS);
    setAnswer(newWord);
    setGuesses([]);
    setGameStatus('in progress');
  }
  return <Button clickHandler={handleReset}>New Game</Button>;
}

export default ResetButton;
