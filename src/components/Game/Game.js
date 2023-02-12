
import CorrectBanner from "../CorrectBanner";
import WrongBanner from "../WrongBanner";
import Prompt from "../Prompt";
import SpellingAttemptForm from "../SpellingAttemptForm";
import Statistics from "../Statistics";
import { WORDS } from "../../data.js";
import { sample } from "../../utils.js";
import React from "react";

function Game() {

  const [targetWord, setTargetWord] = React.useState(() => sample(WORDS));
  const [countCorrectSpellings, setCountCorrectSpellings] = React.useState(0);
  const [correctSpellingStreakLength, setCorrectSpellingStreakLength] =
    React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("running");

  function speakPrompt(wordObject) {

    let wordUtterance = new SpeechSynthesisUtterance(wordObject.word);
    window.speechSynthesis.speak(wordUtterance);

    let sentenceUtterance = new SpeechSynthesisUtterance(wordObject.inASentence);
    window.speechSynthesis.speak(sentenceUtterance);

    window.speechSynthesis.speak(wordUtterance);
  }

  function checkSpellingAttempt(attemptedSpelling) {
    if (attemptedSpelling === targetWord.word) {
      setGameStatus("spelled-correctly");
      setCountCorrectSpellings(countCorrectSpellings + 1);
      setCorrectSpellingStreakLength(correctSpellingStreakLength + 1);
    } else {
      setGameStatus("spelled-incorrectly");
      setCorrectSpellingStreakLength(0);
    }
  }

  function nextWord() {
    const newWordObject = (sample(WORDS));
    setTargetWord(newWordObject);
    setGameStatus("running");
    speakPrompt(newWordObject)
  }

  return (
    <>
      <Prompt targetWordObject={targetWord} />
      <SpellingAttemptForm attemptSpellingFunction={checkSpellingAttempt} gameStatus={gameStatus} />
      {gameStatus === 'spelled-correctly' && (<CorrectBanner correctWordObject={targetWord} nextWord={nextWord}/>)}
      {gameStatus === 'spelled-incorrectly' && (<WrongBanner correctWordObject={targetWord} nextWord={nextWord}/>)}
      <Statistics
        countCorrectSpellings={countCorrectSpellings}
        correctSpellingStreakLength={correctSpellingStreakLength}
      />
    </>
  );
}

export default Game;
