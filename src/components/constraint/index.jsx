import React from 'react';

import './style.scss';

export default ({ className = '', children }) => (
  <div className={`constraint ${className}`}>{children}</div>
);
