import classnames from 'classnames';
import React from 'react';

import Label from '../label';

import './style.scss';

export default ({ name, label, error = false, help, ...rest }) => (
  <div className={classnames('textarea', { 'textarea--has-error': error })}>
    <Label htmlFor={name} label={label}>
      {help && <p className="textarea__help">{help}</p>}

      <textarea className="textarea__field" {...rest} name={name} id={name} />
    </Label>
  </div>
);
