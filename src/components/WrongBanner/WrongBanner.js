import React from 'react';

import Banner from '../Banner';

function WrongBanner({ correctWordObject, nextWord }) {
  return (
    <Banner
      status="sad"
      action={nextWord}
      actionText="Next word"
    >
      <p>
        <strong>Oops!</strong> This word is correctly spelled{' '}
        <strong>
          {correctWordObject.word}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WrongBanner;
