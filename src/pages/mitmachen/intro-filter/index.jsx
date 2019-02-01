import React from 'react';

import Headline from '../../../components/text/headline';

import './style.scss';

export default ({ resultsTitle }) => (
  <header className="intro-filter">
    <div className="intro-filter__results-title-container">
      <Headline level="2" levelStyle="3">
        {resultsTitle}
      </Headline>
    </div>
  </header>
);
