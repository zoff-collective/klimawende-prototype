import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ children, theme, title }) => (
  <section className={`intro intro--theme-${theme}`}>
    <Constraint>
      <h1 className="intro__title">{title}</h1>

      {children}
    </Constraint>
  </section>
);
