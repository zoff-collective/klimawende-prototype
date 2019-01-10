/* eslint-disable react/button-has-type */

import React from 'react';

import './style.scss';

export default ({ type = 'submit', children, ...rest }) => (
  <button className="button" type={type} {...rest}>
    {children}
  </button>
);
