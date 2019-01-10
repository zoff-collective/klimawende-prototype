import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ children }) => (
  <div className="content">
    <Constraint>{children}</Constraint>
  </div>
);
