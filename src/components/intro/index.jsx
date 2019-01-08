import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ children, title }) => (
  <section className="intro">
    <Constraint>
      <h1 className="intro__title">{title}</h1>

      {children}
    </Constraint>
  </section>
);
