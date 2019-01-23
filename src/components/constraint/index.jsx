import classnames from 'classnames';
import React from 'react';

import './style.scss';

export default ({ className = '', width = false, children }) => (
  <div
    className={classnames(
      'constraint',
      { [`constraint--is-wide`]: width === 'wide' },
      className
    )}
  >
    {children}
  </div>
);
