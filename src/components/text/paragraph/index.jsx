/* eslint-disable react/no-danger */

import React from 'react';

import './style.scss';

export default ({ text, isIntro = false }) => (
  <p
    className={`paragraph ${isIntro ? 'paragraph--is-intro' : ''}`}
    dangerouslySetInnerHTML={{ __html: text }}
  />
);
