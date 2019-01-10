/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';

import './style.scss';

export default ({ label, htmlFor, children, ...rest }) => (
  <label htmlFor={htmlFor} className="label" {...rest}>
    <span className="label__text">{label}</span>

    {children}
  </label>
);
