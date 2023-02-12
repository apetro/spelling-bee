import React from "react";

function SpellingAttemptForm( {attemptSpellingFunction, gameStatus}) {
  const [userInput, setUserInput] = React.useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    attemptSpellingFunction(userInput);
    setUserInput("");
  }

  return (
    <form onSubmit={handleFormSubmit} className="guess-input-wrapper">
      <input
        type="text"
        required
        minLength="1"
        value={userInput}
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
        disabled={gameStatus !== 'running'}
      />
      <button disabled={gameStatus !== 'running'}>Check spelling</button>
    </form>
  );
}

export default SpellingAttemptForm;
