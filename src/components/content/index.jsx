import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ children, className = '', width, ...rest }) => (
  <section className={`content ${className}`} {...rest}>
    <Constraint width={width}>{children}</Constraint>
  </section>
);
