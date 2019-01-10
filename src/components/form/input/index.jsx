import classnames from 'classnames';
import React from 'react';

import Label from '../label';

import './style.scss';

export default ({ name, label, width, error = false, ...rest }) => (
  <div
    className={classnames(
      'input',
      { 'input--has-error': error },
      { [`input--width-${width}`]: width }
    )}
  >
    <Label htmlFor={name} label={label}>
      <input className="input__field" {...rest} name={name} id={name} />
    </Label>
  </div>
);
