import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ children }) => (
  <section className="content">
    <Constraint>{children}</Constraint>
  </section>
);
