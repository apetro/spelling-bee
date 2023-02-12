import "./App.css";
import Header from "../Header";
import Prompt from "../Prompt";
import SpellingAttemptForm from "../SpellingAttemptForm";
import { WORDS } from "../../data.js";
import {sample} from "../../utils.js";
import React from "react";

function App() {
  const [targetWord, setTargetWord] = React.useState(() => sample(WORDS));

  function checkSpellingAttempt(attemptedSpelling) {
    if (attemptedSpelling === targetWord) {
      window.alert("You are technically correct! This is the best kind of correct!");
    } else {
      window.alert(`Alas, "${attemptedSpelling}" is not the correct spelling of "${targetWord}".`);
    }
  }

  return (
    <div className="App">
      <Header />
      <Prompt targetWord={targetWord} />
      <SpellingAttemptForm attemptSpellingFunction={checkSpellingAttempt}/>
    </div>
  );
}

export default App;
