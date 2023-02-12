import React from "react";

function SpellingAttemptForm( {attemptSpellingFunction}) {
  const [userInput, setUserInput] = React.useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    attemptSpellingFunction(userInput);
    setUserInput("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        required
        minLength="1"
        value={userInput}
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
      <button>Check spelling</button>
    </form>
  );
}

export default SpellingAttemptForm;
