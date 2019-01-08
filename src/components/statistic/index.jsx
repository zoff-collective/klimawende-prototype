import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ number, text }) => (
  <section className="statistic">
    <Constraint>
      <em className="statistic__number">{number}</em>
      <p className="statistic__text">{text}</p>
    </Constraint>
  </section>
);
