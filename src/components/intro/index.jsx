import React from 'react';

import Constraint from '../constraint';
import Headline from '../text/headline';

import './style.scss';

export default ({ children, title, intro }) => (
  <section className="intro">
    <Constraint>
      <Headline level="1">{title}</Headline>

      {intro && <p className="intro__text">{intro}</p>}

      {children}
    </Constraint>
  </section>
);
