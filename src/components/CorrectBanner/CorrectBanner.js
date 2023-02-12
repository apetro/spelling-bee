import React from 'react';

import Banner from '../Banner';

function CorrectBanner({ correctWordObject, nextWord }) {
  return (
    <Banner
      status="happy"
      action={nextWord}
      actionText="Next word"
    >
      <p>
        <strong>Congratulations!</strong> You have correctly spelled{' '}
        <strong>
          {correctWordObject.word}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default CorrectBanner;
