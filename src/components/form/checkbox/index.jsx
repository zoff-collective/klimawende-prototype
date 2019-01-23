import classnames from 'classnames';
import React from 'react';

import Label from '../label';

import './style.scss';

export default ({ name, label, ...rest }) => (
  <div className={classnames('checkbox')}>
    <Label htmlFor={name} label={label} checkbox>
      <input
        type="checkbox"
        className="checkbox__field"
        {...rest}
        name={name}
        id={name}
      />
    </Label>
  </div>
);
