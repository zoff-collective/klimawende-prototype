import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ children, className = '', ...rest }) => (
  <section className={`content ${className}`} {...rest}>
    <Constraint>{children}</Constraint>
  </section>
);
