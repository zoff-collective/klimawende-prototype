import classnames from 'classnames';
import React from 'react';

import './style.scss';

export default ({ name, label, width, error = false, ...rest }) => (
  <div
    className={classnames(
      'input',
      { 'input--has-error': error },
      { [`input--width-${width}`]: width }
    )}
  >
    <label htmlFor={name} className="label">
      <span className="label__text">{label}</span>

      <input className="input__field" {...rest} name={name} id={name} />
    </label>
  </div>
);
