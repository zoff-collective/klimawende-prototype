/* eslint-disable jsx-a11y/label-has-for */

import classnames from 'classnames';
import React from 'react';

import './style.scss';

export default ({ label, htmlFor, children, checkbox = false, ...rest }) => (
  <label
    htmlFor={htmlFor}
    className={classnames('label', { 'label--for-checkbox': checkbox })}
    {...rest}
  >
    {!checkbox && <span className="label__text">{label}</span>}

    {children}

    {checkbox && <span className="label__text">{label}</span>}
  </label>
);
