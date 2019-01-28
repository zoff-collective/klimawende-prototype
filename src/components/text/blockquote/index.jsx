import React from 'react';

import './style.scss';

export default ({ author, children }) => (
  <figure className="blockquote">
    <blockquote className="blockquote__inner">
      {children}

      {author && (
        <figcaption className="blockquote__author">{author}</figcaption>
      )}
    </blockquote>
  </figure>
);
