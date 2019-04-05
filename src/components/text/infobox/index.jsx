/* eslint-disable react/no-danger */

import React from 'react';

import Headline from '../headline';

import './style.scss';

export default ({ content, title }) => (
  <section className="infobox">
    {title && (
      <Headline level="3" levelStyle="2">
        {title}
      </Headline>
    )}

    <div
      className="infobox__content-container"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </section>
);
