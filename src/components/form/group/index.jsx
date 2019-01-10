import classnames from 'classnames';
import React from 'react';

import './style.scss';

export default ({ type, children }) => (
  <div
    className={classnames('form-group', { [`form-group--type-${type}`]: type })}
  >
    {children}
  </div>
);
