/* eslint-disable react/no-danger */

import React from 'react';

import './style.scss';

export default ({ text }) => (
  <p className="paragraph" dangerouslySetInnerHTML={{ __html: text }} />
);
