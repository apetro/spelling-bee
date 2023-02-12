import React from "react";

function Prompt({ targetWordObject }) {
  function speakTheSpellingWord() {
    let utterance = new SpeechSynthesisUtterance(targetWordObject.word);
    window.speechSynthesis.speak(utterance);
  }
  function speakASentenceWithTheSpellingWord() {
    let utterance = new SpeechSynthesisUtterance(targetWordObject.inASentence);
    window.speechSynthesis.speak(utterance);
  }

  function replaceWordWithBlank(sentence, word) {

    // replace both the literal word and the word with its first character capitalized
    // (to handle the case where the spelling word is the first word in the example sentence)
    //
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return sentence.replace(word, "[]").replace(capitalizedWord, "[]");
  }

  return (
    <>
      <div>Spell the missing word:</div>
      <div>{replaceWordWithBlank(targetWordObject.inASentence, targetWordObject.word)}</div>
      <div><button onClick={speakTheSpellingWord}>Speak the spelling word to me</button></div>

      <div><button onClick={speakASentenceWithTheSpellingWord}>Speak the spelling word in a sentence.</button></div>
    </>
  );
}

export default Prompt;
