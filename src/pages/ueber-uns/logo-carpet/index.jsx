import React from 'react';

import './style.scss';

export default ({ logos }) => (
  <ol className="logo-carpet">
    {logos.map(logo => (
      <li>
        <img src={logo} className="logo-carpet__logo" alt="" />
      </li>
    ))}
  </ol>
);
