import React from "react";

function Statistics( {countCorrectSpellings, correctSpellingStreakLength}) {

  return (
    <dl>
      <dt>Words spelled correctly:</dt>
      <dd>{countCorrectSpellings}</dd>
      <dt>Current streak of correctly spelled words:</dt>
      <dd>{correctSpellingStreakLength}</dd>
    </dl>
  );
}

export default Statistics;
