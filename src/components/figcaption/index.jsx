import React from 'react';

import './style.scss';

export default ({ content }) => (
  <figcaption className="figure-caption">
    <p dangerouslySetInnerHTML={{ __html: content }} />
  </figcaption>
);
