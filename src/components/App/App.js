import "./App.css";
import Header from "../Header";
import Prompt from "../Prompt";
import SpellingAttemptForm from "../SpellingAttemptForm";
import Statistics from "../Statistics";
import { WORDS } from "../../data.js";
import { sample } from "../../utils.js";
import React from "react";

function App() {
  const [targetWord, setTargetWord] = React.useState(() => sample(WORDS));
  const [countCorrectSpellings, setCountCorrectSpellings] = React.useState(0);
  const [correctSpellingStreakLength, setCorrectSpellingStreakLength] =
    React.useState(0);

  function checkSpellingAttempt(attemptedSpelling) {
    if (attemptedSpelling === targetWord.word) {
      window.alert(
        "You are technically correct! This is the best kind of correct!"
      );
      setTargetWord(sample(WORDS));
      setCountCorrectSpellings(countCorrectSpellings + 1);
      setCorrectSpellingStreakLength(correctSpellingStreakLength + 1);
    } else {
      window.alert(
        `Alas, "${attemptedSpelling}" is not the correct spelling of "${targetWord.WORDS}".`
      );
      setCorrectSpellingStreakLength(0);
    }
  }

  return (
    <div className="App">
      <Header />
      <Prompt targetWordObject={targetWord} />
      <SpellingAttemptForm attemptSpellingFunction={checkSpellingAttempt} />
      <Statistics
        countCorrectSpellings={countCorrectSpellings}
        correctSpellingStreakLength={correctSpellingStreakLength}
      />
    </div>
  );
}

export default App;
