import classnames from 'classnames';
import React from 'react';

import Label from '../label';

import './style.scss';

export default ({ name, label, error = false, ...rest }) => (
  <div className={classnames('textarea', { 'textarea--has-error': error })}>
    <Label htmlFor={name} label={label}>
      <textarea className="textarea__field" {...rest} name={name} id={name} />
    </Label>
  </div>
);
