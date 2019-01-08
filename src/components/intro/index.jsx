import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ children, title, intro }) => (
  <section className="intro">
    <Constraint>
      <h1 className="intro__title">{title}</h1>

      {intro && <p className="intro__text">{intro}</p>}

      {children}
    </Constraint>
  </section>
);
