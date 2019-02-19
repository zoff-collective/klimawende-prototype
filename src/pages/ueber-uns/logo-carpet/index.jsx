import React from 'react';

export default ({ logos }) => (
  <ol>
    {logos.map(logo => (
      <img src={logo} alt="" />
    ))}
  </ol>
);
